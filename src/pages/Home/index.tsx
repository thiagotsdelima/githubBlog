import { Header } from "../../components/Header";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from '../../components/Sidebar';
import { Post } from '../../components/Post';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <InputContainer>
        <section>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </section>
        <Input placeholder="Digite sua busca..." />
        </InputContainer>
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