import {View, Text} from 'react-native';
import React from 'react';
import SavedPost from '../component/SavedPost';

const SavedPostScreen = () => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      {/* <ProfilePost /> */}
      <SavedPost />
    </View>
  );
};

export default SavedPostScreen;
