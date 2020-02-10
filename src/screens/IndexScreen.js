import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BlogContext from '../context/BlogContext';

const styles = StyleSheet.create({});

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>This is Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;
