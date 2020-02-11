import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Context} from '../context/BlogContext';
import PostListItem from '../components/PostListItem';

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  addPostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const IndexScreen = ({navigation}) => {
  const {state} = useContext(Context);
  return (
    <View>
      <TouchableOpacity
        style={styles.addPostRow}
        onPress={() => navigation.navigate('Create')}>
        <Text>Add New Post</Text>
        <Icon name="plus" size={30} />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => <PostListItem post={item} />}
      />
    </View>
  );
};

export default IndexScreen;
