import React, {createContext} from 'react';

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
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export {BlogContext as default};
