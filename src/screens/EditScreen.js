import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PostForm from '../components/PostForm';

const styles = StyleSheet.create({});

const EditScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  return (
    <View>
      <Text>
Edit
        {' '}
        {post.title}
        {' '}
here
      </Text>
      <PostForm post={post} origin="Post" />
    </View>
  );
};

export default withNavigation(EditScreen);
