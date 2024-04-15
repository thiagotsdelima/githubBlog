import { PostContainer, PostContent } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IPost, PostsContext } from '../../../../PostContext'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {

  const timeDistanceNow = formatDistanceToNow(new Date(post!.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostContainer>
      <PostContent>
        <header>
          <h2>{post?.title}</h2>
          <span>{timeDistanceNow}</span>
        </header>
        <footer>
          <p>{post?.body}</p>
        </footer>
      </PostContent>
    </PostContainer>
  );
}
