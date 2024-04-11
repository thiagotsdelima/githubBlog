import { Header } from "../../components/Header";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar';
import { Input } from './components/Input';
import { useContext } from "react";
import { PostsContext } from "../../PostContext";
import { Post } from "./components/Post";


export function Home() {
  const { posts } = useContext(PostsContext);

  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <InputContainer>
          <section>
            <strong>Publicações</strong>
            <span>{posts.length} {posts.length === 1 ? 'Publication' : 'publications'}</span>
          </section>
          <Input
            type="text" 
            placeholder="Digite sua busca..."
          />
        </InputContainer>
        <TransactionsContainer>
          {posts.slice(0, 6).map(issue => (
              <Post key={issue.number} dataPost={issue} />
          ))}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  );
}