import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  postListLink: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

const Post = ({ post, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <View>
      <Text style={styles.content}>{post.content}</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.push('Index')}>
      <Text style={styles.postListLink}>Back to Post List</Text>
    </TouchableOpacity>
  </View>
);

export default withNavigation(Post);
