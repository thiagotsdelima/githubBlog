import { Header } from "../../components/Header";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar/index.tsx';
import { PostContext } from '../../PostContext.tsx/index.tsx';
import { Input } from '../../components/Input';

const postComents = [
  1,
  2,
  3,
  4,
  5,
  6,
]

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
          {postComents.map(postComent => {
            return <PostContext />
          })}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  )
}