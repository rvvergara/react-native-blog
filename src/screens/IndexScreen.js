import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
      <FlatList
        data={state}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => <PostListItem post={item} />}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Icon name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;
