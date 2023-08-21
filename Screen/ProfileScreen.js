import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const postData = useSelector(state => state.post.data); // Access the 'data' array from the Redux state
  console.log('Profile', postData.Image);

  return (
    <View>
      {postData.map(item => (
        <Text key={item.id}>{item.name}</Text> // Render each name in a Text component
      ))}
    </View>
  );
};

export default ProfileScreen;
