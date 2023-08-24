import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedPost} from '../redux/PostSlice';
import {useNavigation} from '@react-navigation/native';
import PostScreen from '../Screen/PostScreen';

const ProfilePost = () => {
  const navigation = useNavigation();
  const postData = useSelector(state => state.post.data);
  const dispatch = useDispatch();

  const onPressHandler = item => {
    navigation.navigate('PostScreen');
  };
  const renderChat = ({item}) => (
    <View style={{padding: 0.5}}>
      <TouchableOpacity onPress={onPressHandler}>
        {item.name == 'Aditya' && (
          <Image source={item.Post} style={{height: 150, width: 130}} />
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={renderChat}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProfilePost;

{
  /* {console.log('Post Profile', item.Image)}
    <Image source={item.Post} style={{ height: 150, width: 130 }} /> */
}
