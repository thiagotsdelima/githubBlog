import { Header } from "../../components/Header";
import { HomeContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from '../../components/Sidebar';
import { Post } from '../../components/Post';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <section>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </section>
        <Input />
        <TransactionsContainer>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  )
}