import React from 'react';
import {View, StyleSheet} from 'react-native';
import Post from '../components/Post';

const styles = StyleSheet.create({});

const PostScreen = ({navigation}) => (
  <View>
    <Post post={navigation.getParam('post')} />
  </View>
);

export default PostScreen;
