import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from '../services/api'; 

export interface IPost {
  body: string;
  title: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
      login: string;
  };
}
interface PostsContextType {
  posts: IPost[]
  SearchPosts: (query?: string) => void;
}

interface PostsProviderProps {
  children: ReactNode
}
export const PostsContext = createContext<PostsContextType>({
  posts: [],
  SearchPosts: async () => {}
} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([]);

  const SearchPosts = useCallback(async (query = '') => {
    try {
      const response = await api.get(`/search/issues`, {
        params: { q: `repo:diego3g/github-blog ${query}` },
      });
      console.log("Dados recebidos após chamada API:", response.data.items);
      setPosts(response.data.items);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }, []);

  useEffect(() => {
    SearchPosts();
  }, [SearchPosts]);

  return (
    
        <PostsContext.Provider value={{ posts, SearchPosts }}>
          {children}
        </PostsContext.Provider>
    
  );
}