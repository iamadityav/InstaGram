import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ReelScreen = () => {
  const reel = useSelector(state => state.video.data);
  console.log('Reelscreeen', reel);
  return (
    <View>
      <Text>ReelScreen</Text>
    </View>
  );
};

export default ReelScreen;
