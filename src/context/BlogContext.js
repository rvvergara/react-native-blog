import createDataContext from './createDataContext';

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

const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.post];
    case 'UPDATE_POST': {
      const indexToUpdate = state.findIndex(post => post.id === action.id);
      const newState = {...state};
      newState[indexToUpdate] = action.post;
      return newState;
    }
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};

const {Context, Provider} = createDataContext(postReducer, blogPosts);

export {Context, Provider};
