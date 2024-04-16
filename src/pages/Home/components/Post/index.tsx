import { PostContainer, PostContent } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { IPost, PostsContext } from '../../../../PostContext';
import { NavLink } from 'react-router-dom';

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {

  const timeDistanceNow = formatDistanceToNow(new Date(post!.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <NavLink to={`/post/${post?.number}`} style={{ textDecoration: 'none' }}>
    <PostContainer>
      <PostContent>
        <header>
          <h2>{post?.title}</h2>
          <span>{timeDistanceNow}</span>
        </header>
        <footer>
        <p className="post-body">{post?.body}</p>
        </footer>
      </PostContent>
    </PostContainer>
    </NavLink>
  );
}
