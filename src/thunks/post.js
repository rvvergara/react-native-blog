import api from '../services/api.js';
import { setPosts } from '../actions/post';

export const fetchPosts = async (dispatch) => {
  const path = '';
  try {
    const res = await api.get(path);
    await dispatch(setPosts(res.data));
  } catch (err) {
    console.log('ERROR', err);
  }
};
