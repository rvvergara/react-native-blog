import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
});

const Post = ({post}) => {
  const {dispatch} = useContext(BlogContext);
  return (
    <View>
      <Text>{post.title}</Text>
      <Button
        style={styles.button}
        title="X"
        onPress={() => dispatch({type: 'DELETE_POST', id: post.id})}
      />
    </View>
  );
};

export default Post;
