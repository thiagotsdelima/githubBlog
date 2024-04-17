import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as 'react-syntax-highlighter/dist/esm/styles/prism';

import { ArticleContainer } from './styles';
 

export function DetailsContent() {
  const { id } = useParams();  
  const post = {};  

  const highlightedLineNumbers = extractHighlightRanges(post.meta);

  
  const generateLineProps = useCallback(
    (lineNumber) => ({
      data: highlightedLineNumbers.includes(lineNumber) ? 'highlight' : undefined,
    }),
    [highlightedLineNumbers]
  );

  return (
      <ArticleContainer>
        <ReactMarkdown
          children={post.content}
          className="line-break"
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const language = match?.[1];
              return (
                <SyntaxHighlighter
                  language={language}
                  PreTag="div"
                  className="codeStyle"
                  showLineNumbers
                  wrapLines={Boolean(node?.data?.meta)}
                  useInlineStyles
                  lineProps={generateLineProps}
                  children={String(children).replace(/\s$/g, '')}
                  style={getSyntaxStyles()}
                  {...props}
                />
              );
            },
          }}
        />
      </ArticleContainer>
  );
}
