import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { DetailsContent } from "./components/DetailsContent";
import { Sidebar } from "./components/Sidebar";
import { PostContainer } from "./styles";

export interface IPost {
  number: number;
  html_url: string;
  title: string;
  body: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
}

export function Details() {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("ID:", id);
    api.get(`https://api.github.com/repos/actualOwner/actualRepo/issues/${id}`)
      .then(response => {
        console.log("Dados recebidos:", response.data);
        setPost(response.data);
        setError(null); 
      })
      .catch(error => {
        console.error("Erro na chamada API:", error);
        setError("Failed to load data"); 
      });
  }, [id]);

  if (!post && !error) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error loading post. Please try again later.</div>;
  }

  return (
    <PostContainer>
      <Sidebar post={post!} />  
      <DetailsContent content={post!.body} />  // Here too
    </PostContainer>
  );
}
