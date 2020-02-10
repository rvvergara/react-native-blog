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

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

const IndexScreen = () => {
  const {posts, addPost} = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const handleSubmit = () => {
    addPost({id: String(posts.length + 1), title});
    setTitle('');
  };
  return (
    <View>
      <Text>This is Index Screen</Text>
      <FlatList
        data={posts}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => <Text>{item.title}</Text>}
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
