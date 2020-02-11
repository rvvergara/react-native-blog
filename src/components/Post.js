import React from 'react';
import {View, Text} from 'react-native';

const Post = ({post}) => (
  <View>
    <Text>{post.title}</Text>
  </View>
);

export default Post;
