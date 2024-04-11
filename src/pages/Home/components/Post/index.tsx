import { PostContainer, PostContent } from "./styles";
import { IPost } from '../../../../PostContext/index.tsx'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../services/api.ts";
import { format } from 'date-fns';  
import { ptBR } from 'date-fns/locale';

export function Post() {
  const [postDetails, setPostDetails] = useState<IPost>({} as IPost);
  const { id } = useParams();

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await api.get(`/repos/diego3g/reactjs-github-blog-challenge/issues/${id}`);
        setPostDetails(response.data);
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
      }
    }

    loadPost();
  }, [id]);

  return (
    <PostContainer>
      <PostContent>
        <header>
          <h2>{postDetails.title}</h2>
          <span>{format(new Date(postDetails.created_at), 'PPpp', { locale: ptBR })}</span>
        </header>
        <footer>
          <p>{postDetails.body}</p>
          <p>Autor: {postDetails.user?.login}</p>
          <a href={postDetails.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </footer>
      </PostContent>
    </PostContainer>
  );
}