import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ProfilePost = () => {
  const reels = useSelector(state => state.video.data);

  const renderChat = ({item}) => (
    <View style={{padding: 0.5}}>
      <Video
        source={item.reel.video}
        style={styles.backgroundVideo}
        controls={true}
        muted={true}
        repeat={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
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
  backgroundVideo: {
    height: 250,
    width: 143,
  },
});

export default ProfilePost;
// import { View, Text } from 'react-native'
// import React from 'react'

// const ProfileReelSection = () => {
//   return (
//     <View>
//       <Text>ProfileReelSection</Text>
//     </View>
//   )
// }

// export default ProfileReelSection
