import React, {createContext, useState} from 'react';

const BlogContext = createContext();

const blogPosts = [
  {
    id: '1',
    title: 'Blog 1',
  },
  {
    id: '2',
    title: 'Blog 2',
  },
];

export const BlogProvider = ({children}) => {
  const [posts, setPosts] = useState(blogPosts);
  const addPost = post => setPosts([...posts, post]);
  return (
    <BlogContext.Provider value={{posts, addPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export {BlogContext as default};
