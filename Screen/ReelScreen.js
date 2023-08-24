import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';

const ReelScreen = () => {
  const reel = useSelector(state => state.video.data);
  console.log('Reelscreen', reel);

  return (
    <View style={styles.container}>
      <Video
        source={require('../Data/Videos/reel1.mp4')}
        style={styles.backgroundVideo}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4c4c4c',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ReelScreen;

{
  /* <Video
  source={{
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  }}
  style={styles.backgroundVideo}
  //controls={true}
/> */
}
