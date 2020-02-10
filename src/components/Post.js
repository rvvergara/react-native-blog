import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
});

const Post = ({post}) => {
  const {dispatch} = useContext(Context);
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
