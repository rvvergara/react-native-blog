import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import uuid from 'uuid';
import {Context as BlogContext} from '../context/BlogContext';

const styles = StyleSheet.create({
  titleInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
  contentInput: {
    borderWidth: 1,
    borderColor: 'black',
    paddingTop: 1,
  },
});

const PostForm = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {dispatch} = useContext(BlogContext);

  const handleSubmit = () => {
    const post = {
      id: uuid.v4(),
      title,
      content,
    };
    dispatch({
      type: 'ADD_POST',
      post,
    });
    setTitle('');
    setContent('');
    navigation.navigate('Index');
  };

  return (
    <View>
      <Text>Title</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={val => setTitle(val)}
        placeholder="Put title here"
      />
      <Text>Content</Text>
      <TextInput
        value={content}
        onChangeText={val => setContent(val)}
        multiline
        numberOfLines={5}
        style={styles.contentInput}
      />
      <Button title="Submit Post" onPress={handleSubmit} />
    </View>
  );
};

export default withNavigation(PostForm);
