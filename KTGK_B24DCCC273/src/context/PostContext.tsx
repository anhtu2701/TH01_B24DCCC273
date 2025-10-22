import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Post, PostFormData } from '../types';
import { initialPosts } from '../constants/data';

interface PostContextType {
  posts: Post[];
  addPost: (post: PostFormData) => void;
  updatePost: (id: string, post: PostFormData) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => Post | undefined;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (postData: PostFormData) => {
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id: string, postData: PostFormData) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, ...postData } : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const getPostById = (id: string) => {
    return posts.find(post => post.id === id);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost, getPostById }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within PostProvider');
  }
  return context;
};