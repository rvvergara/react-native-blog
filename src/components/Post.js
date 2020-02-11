import React from 'react';
import {View, Text} from 'react-native';

const Post = ({post}) => (
  <View>
    <Text>{post.title}</Text>
    <View>
      <Text>{post.content}</Text>
    </View>
  </View>
);

export default Post;
