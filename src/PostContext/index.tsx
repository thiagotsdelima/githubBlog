import React, { createContext, useState, useCallback } from 'react';
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
  fetchPosts: (query?: string) => Promise<void>;
  fetchPost: (id: string) => Promise<void>;
}



export const PostsContext = createContext<PostsContextType | undefined>(undefined);


export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback(async (query = '') => {
    const response = await api.get(`/search/issues?q=${encodeURIComponent(query ?? '')}repo:rocketseat-education/reactjs-github-blog-challenge`)
    setPosts(response.data.items.slice(0, 6));
  }, []);

  const fetchPost = useCallback(async (id: string) => {
    try {
      console.log(`Fetching post with ID: ${id}`);
      const response = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`);
      const newPost = response.data;
  
      setPosts(prevPosts => {
        const index = prevPosts.findIndex(p => p.id.toString() === newPost.id.toString());
        if (index !== -1) {
          const updatedPosts = [...prevPosts];
          updatedPosts[index] = newPost;
          return updatedPosts;
        } else {
          return [...prevPosts, newPost];
        }
      });
      console.log(`Post fetched and state updated for ID: ${id}`);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }, []);
  
  

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, fetchPost }}>
      {children}
    </PostsContext.Provider>
  );
};

