import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar';
import { Input } from './components/Input';
import { Post } from "./components/Post";
import { PostsContext } from "../../PostContext";
import { useContext } from "react";


export function Home() {
  const { posts } = useContext(PostsContext);

  if (!posts) {
    return <p>Loading posts...</p>;
  }

  return (
    <HomeContainer>
     
      <Wrapper>
        <Sidebar />
        <InputContainer>
          <section>
            <strong>Publicações</strong>
            <span>{posts.length} Publications</span>
          </section>
          <Input type="text" placeholder="Digite sua busca..." />
        </InputContainer>
        <TransactionsContainer>
        {posts.map((post) => (
            <Post key={post.number.toString()} post={post} />
          ))}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  );
}
