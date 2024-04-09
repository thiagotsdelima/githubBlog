import { Header } from "../../components/Header";
import { HomeContainer, Wrapper } from "./styles";
import { Sidebar } from '../../components/Sidebar';
import { Post } from '../../components/Post';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <HomeContainer>
      <Header/>
      <Wrapper>
        <Sidebar />
        <Input />
        <Post />
      </Wrapper>
    </HomeContainer>
  )
}