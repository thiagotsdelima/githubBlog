import { Header } from "../../components/Header";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar';
import { Input } from './components/Input';
import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";


export interface IPost {
  number: number
  html_url: string
  title: string
  body: string
  user: {
    login: string
  }
  created_at: string
  comments: number
}

export function Home() {
  const [post, setPost] = useState<IPost>()
  const { id } = useParams()

  useEffect(() => {
    api.get(`repos/diego3g/github-blog/issues/${id}`).then((response) => {
      setPost(response.data)
    })
  }, [])

  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <InputContainer>
          <section>
            <strong>Publicações</strong>
            <span>{setPost.length} {setPost.length === 1 ? 'Publication' : 'publications'}</span>
          </section>
          <Input
            type="text" 
            placeholder="Digite sua busca..."
          />
        </InputContainer>
        <TransactionsContainer>
        {post && (
              <Post /> 
            )}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  );
}