import api from '../services/api.js';
import {
  setPosts, addPost, updatePost, removePost,
} from '../actions/post';

export const fetchPosts = async (dispatch) => {
  const path = '';
  try {
    const res = await api.get(path);
    await dispatch(setPosts(res.data));
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const createPost = async (dispatch, newPost) => {
  const path = '';
  try {
    const res = await api.post(path, newPost);
    dispatch(addPost(res.data));
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const updatePostOnDb = async (dispatch, id, updatedPost) => {
  const path = `/${id}`;
  try {
    const res = await api.put(path, updatedPost);
    dispatch(updatePost(id, res.data));
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const deletePost = async (dispatch, id) => {
  const path = `/${id}`;

  try {
    const res = await api.delete(path);
    dispatch(removePost(id));
  } catch (err) {
    console.log('ERROR', err);
  }
};
