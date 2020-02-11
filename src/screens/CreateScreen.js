import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PostForm from '../components/PostForm';

const styles = StyleSheet.create({});

const CreateScreen = () => (
  <View>
    <Text>Add New Post Here</Text>
    <PostForm origin="Index" />
  </View>
);

export default CreateScreen;
