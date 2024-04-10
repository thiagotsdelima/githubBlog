import { PostContainer, PostContent } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <PostContent>
      <header>
        <h2>JavaScript data types and data structures</h2>
        <div><span>Há 1 dia</span></div>
      </header>
      <footer>
        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
        </p>
      </footer>
      </PostContent>
    </PostContainer>
  )
}