import uuid from 'uuid';
import createDataContext from './createDataContext';

const blogPosts = [
  {
    id: uuid.v4(),
    title: 'Blog 1',
    content:
      'Sunt dolor esse consectetur irure voluptate consectetur nisi ullamco veniam. Ipsum id pariatur sunt id incididunt non Lorem. Laboris tempor ullamco laboris consequat laborum aliquip laboris nisi fugiat deserunt enim anim duis. Do magna consequat irure aliqua officia Lorem sunt ullamco. Tempor dolor tempor proident mollit officia aute ut qui id mollit.',
  },
  {
    id: uuid.v4(),
    title: 'Blog 2',
    content:
      'Aliqua laborum laboris proident aliquip eiusmod. Adipisicing duis velit sit aliqua aute ea in aliquip. In consequat elit proident commodo duis culpa sunt. Exercitation eu adipisicing quis exercitation nisi fugiat. Veniam sunt voluptate cupidatat Lorem enim nulla. Nisi minim ea ad ad culpa cillum sit.',
  },
];

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
