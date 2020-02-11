export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts,
});

export const addPost = (post) => ({
  type: 'ADD_POST',
  post,
});

export const updatePost = (id, post) => ({
  type: 'UPDATE_POST',
  id,
  post,
});

export const removePost = (id) => ({
  type: 'DELETE_POST',
  id,
});
