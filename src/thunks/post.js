import api from '../services/api.js';

export const fetchPosts = () => async dispatch => {
  const path = '/';
  try {
    const res = await api.get(path);
    console.log('RESPONSE', res);
  } catch (err) {
    console.log('ERROR', err);
  }
};
