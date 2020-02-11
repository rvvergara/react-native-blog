import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Context} from '../context/BlogContext';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    color: 'red',
    fontSize: 30,
  },
});

const Post = ({post}) => {
  const {dispatch} = useContext(Context);
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{post.title}</Text>
      <TouchableOpacity
        onPress={() => dispatch({type: 'DELETE_POST', id: post.id})}>
        <Icon name="trash" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Post;
