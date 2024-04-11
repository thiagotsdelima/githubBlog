import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { PostContainer, PostContent } from "./styles";
import { api } from '../services/api'; 

export interface IPost {
  number: number
  title: string
  body: string
  created_at: string
}
interface PostsContextType {
  posts: IPost[]
  SearchPosts: (query?: string) => {}
}
interface PostsProviderProps {
  children: ReactNode
}
export const PostsContext = createContext<PostsContextType>({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([]);

  const SearchPosts = useCallback(async (query = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:diego3g/github-blog ${query}`,
      },
    });
    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    SearchPosts();
  }, [SearchPosts]);

  return (
    <PostContainer>
      <PostContent>
        <PostsContext.Provider value={{ posts, SearchPosts }}>
          {children}
        </PostsContext.Provider>
      </PostContent>
    </PostContainer>
  );
}