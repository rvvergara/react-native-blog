import React, {createContext} from 'react';

const BlogContext = createContext();

export const BlogProvider = ({children}) => (
  <BlogContext.Provider value={5}>{children}</BlogContext.Provider>
);

export {BlogContext as default};
