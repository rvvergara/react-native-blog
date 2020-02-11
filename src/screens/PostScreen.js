import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Post from '../components/Post';

const styles = StyleSheet.create({});

const PostScreen = ({ navigation }) => (
  <View>
    <Post post={navigation.getParam('post')} />
  </View>
);

PostScreen.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() => navigation.push('Edit', { post: navigation.getParam('post') })
          }
    >
      <Icon name="pencil" size={30} />
    </TouchableOpacity>
  ),
});

export default PostScreen;
