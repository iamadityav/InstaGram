import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {setVideoLike} from '../redux/AddPostSlice';
import {useNavigation} from '@react-navigation/native';

const ReelScreen = () => {
  const reels = useSelector(state => state.video.data);

  const navigation = useNavigation();

  const onPressProfileHandler = () => {
    navigation.navigate('ProfileScreen');
  };

  const dispatch = useDispatch();
  const onPressHandler = postId => {
    dispatch(setVideoLike(postId));
  };

  const renderReels = ({item}) => {
    return (
      <View>
        <Video
          source={item.reel.video}
          style={styles.backgroundVideo}
          controls={true}
          muted={true}
          repeat={true}
        />
        <View style={{flexDirection: 'row', height: 60}}>
          <View>
            <TouchableOpacity onPress={() => onPressHandler(item.id)}>
              <Ionicons
                name={item.isLiked ? 'heart' : 'heart-outline'}
                size={25}
                style={[styles.icon, item.isLiked ? styles.coloredIcon : null]}
              />
              <Text style={{color: 'white'}}>{item.post.likes}</Text>
            </TouchableOpacity>
          </View>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="#ffffff"
            style={{left: 15}}
          />
          <TouchableOpacity>
            <Ionicons
              name="bookmark-outline"
              size={24}
              color="#ffffff"
              style={{left: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={{}}>
            <Ionicons
              name="ellipsis-vertical"
              size={22}
              style={{color: '#ffffff', left: 310}}
            />
          </TouchableOpacity>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Aditya</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.headerText}>Reels</Text>
        <Ionicons name="camera-outline" size={35} style={styles.icon} />
      </View>
      <TouchableOpacity onPress={onPressProfileHandler}>
        <View style={styles.profileimagecontainer}>
          <Image
            source={require('../Data/images/Aditya.jpeg')}
            style={styles.profileimage}
          />
          <View style={styles.textcontainer2}>
            <Text style={styles.icon}>Aditya</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList data={reels} renderItem={renderReels} horizontal={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 800,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '600',
  },
  icon: {
    color: '#ffffff',
    marginRight: 15,
  },
  text: {
    color: '#ffffff',
    right: 12,
    fontSize: 17,
  },
  textcontainer: {
    marginLeft: 50,
  },
  textcontainer2: {
    marginLeft: 20,
    marginTop: 20,
  },
  profileimage: {
    height: 40,
    width: 40,
    borderRadius: 70,
    marginLeft: 10,
    marginTop: 10,
  },
  profileimagecontainer: {
    flexDirection: 'row',
    height: 60,
  },
  coloredIcon: {
    color: '#ff0000',
  },
});

export default ReelScreen;
