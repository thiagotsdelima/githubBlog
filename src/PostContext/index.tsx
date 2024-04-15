import React, { createContext, useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';


export interface IPost {
  id: number;  
  title: string;
  body: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

interface PostsContextType {
  posts: IPost[];
}


export const PostsContext = createContext<PostsContextType | undefined>(undefined);


export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async (query = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `repo:diego3g/github-blog ${query}`,
      },
    })
    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
};
