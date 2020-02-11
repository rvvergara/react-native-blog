import createDataContext from './createDataContext';

const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [...state, action.post];
    case 'UPDATE_POST':
      return state.map((post) => (post.id === action.id ? action.post : post));
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

const { Context, Provider } = createDataContext(postReducer, []);

export { Context, Provider };
