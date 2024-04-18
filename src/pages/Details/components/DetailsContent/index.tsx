import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rangeParser from 'parse-numeric-range'; 
import { ArticleContainer } from './styles';

export interface IPost {
  title: string;
  content: string;
  meta?: string;  
}

interface DetailsContentProps {
  post: IPost;
}

export function DetailsContent({ post }: DetailsContentProps) {
  const extractHighlightRanges = React.useCallback((meta: string) => {
    return rangeParser(meta || '');
  }, []);

  const highlightedLineNumbers = extractHighlightRanges(post.meta || '');

  const generateLineProps = React.useCallback((lineNumber: number) => ({
    style: highlightedLineNumbers.includes(lineNumber) ? { background: 'yellow' } : undefined,
  }), [highlightedLineNumbers]);

  return (
    <ArticleContainer>
      <ReactMarkdown
        children={post.content}
        className="line-break"
        components={{
          code({ node, inline, className, children, ...props }) {
            if (inline) {
              return <code className={className} {...props}>{children}</code>;
            }
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : 'plaintext';
            return (
              <SyntaxHighlighter
                language={language}
                style={dark}
                PreTag="div"
                className="codeStyle"
                showLineNumbers={true}
                wrapLines={true}
                useInlineStyles={true}
                lineProps={lineNumber => generateLineProps(lineNumber)}
                {...props}
              >
                {String(children).replace(/\s+$/, '')}
              </SyntaxHighlighter>
            );
          },
        }}
      />
    </ArticleContainer>
  );
}
