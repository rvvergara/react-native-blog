import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import BlogContext from '../context/BlogContext';
import Post from '../components/Post';

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

const IndexScreen = () => {
  const {posts, dispatch} = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const handleSubmit = () => {
    const post = {id: String(posts.length + 1), title};
    dispatch({type: 'ADD_POST', post});
    setTitle('');
  };
  return (
    <View>
      <Text>This is Index Screen</Text>
      <FlatList
        data={posts}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => <Post post={item} />}
      />
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={val => setTitle(val)}
      />
      <Button title="Add post" onPress={handleSubmit} />
    </View>
  );
};

export default IndexScreen;
