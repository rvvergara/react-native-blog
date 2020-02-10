import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const styles = StyleSheet.create({});

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>This is Index Screen</Text>
    </View>
  );
};

export default IndexScreen;
