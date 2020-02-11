import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import PostScreen from './src/screens/PostScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Provider} from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Post: PostScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  },
);

const App = createAppContainer(navigator);

export default () => (
  <Provider>
    <App />
  </Provider>
);
