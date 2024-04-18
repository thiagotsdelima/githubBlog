import { useContext, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeContainer, InputContainer, TransactionsContainer, Wrapper } from "./styles";
import { Sidebar } from './components/Sidebar';
import { Input } from './components/Input';
import { Post } from "./components/Post";
import { PostsContext } from "../../PostContext";

const searchSchema = z.object({
  query: z.string(),
});

type SearchInputs = z.infer<typeof searchSchema>;

export function Home() {
  const { posts, fetchPosts } = useContext(PostsContext); 

  useEffect(() => {
    fetchPosts(); 
  }, [fetchPosts]); 

  if (!posts) {
    return <p>Loading posts...</p>; 
  }

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchSchema),
  });

  function handleSearchSubmit(data: SearchInputs) {
    fetchPosts(data.query);
  }
  
  return (
    <HomeContainer>
      <Wrapper>
        <Sidebar />
        <InputContainer>
          <section>
            <strong>Publications</strong>
            <span>{posts.length} Publications</span>
          </section>
          <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <Input 
              type="text" 
              placeholder="Digite sua busca..."
              {...register('query')}
              disabled={isSubmitting} 
            />
          </form>
        </InputContainer>
        <TransactionsContainer>
          {posts.map((post) => (
            <Post key={post.id.toString()} post={post} />
          ))}
        </TransactionsContainer>
      </Wrapper>
    </HomeContainer>
  );
}
