import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import uuid from 'uuid';
import {Context as BlogContext} from '../context/BlogContext';
import {addPost, updatePost} from '../actions/post';

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

const PostForm = ({navigation, post, origin}) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const {dispatch} = useContext(BlogContext);

  const handleSubmit = () => {
    const postForSubmission = {
      id: post ? post.id : uuid.v4(),
      title,
      content,
    };
    const action = post
      ? updatePost(post.id, postForSubmission)
      : addPost(postForSubmission);
    dispatch(action);
    setTitle('');
    setContent('');
    navigation.push(origin, {post: postForSubmission});
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
