import { Header } from "../../components/Header";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar';
import { Input } from './components/Input';
import { useContext } from "react";
import { PostsContext } from "../../PostContext";
import { Post } from "./components/Post/index.tsx";


export function Home() {
  const { posts } = useContext(PostsContext);

  const sortedPosts = posts.slice(0, 6);
  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <InputContainer>
          <section>
            <strong>Publicações</strong>
            <span>{(posts?.length ?? 0)} {posts?.length === 1 ? 'Publication' : 'publications'}</span>
          </section>
        <Input
          type="text" 
          placeholder="Digite sua busca..."
        />
        </InputContainer>
        <TransactionsContainer>
        {sortedPosts.map(post => (
            <Post key={post.number} post={post} />
          ))}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  )
}