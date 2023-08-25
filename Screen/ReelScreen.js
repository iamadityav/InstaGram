import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
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

        <View style={{position: 'absolute', bottom: 55, right: 15}}>
          <TouchableOpacity onPress={() => onPressHandler(item.id)}>
            <View style={{marginBottom: 30}}>
              <Ionicons
                name={item.isLiked ? 'heart' : 'heart-outline'}
                size={26}
                style={[styles.icon, item.isLiked ? styles.coloredIcon : null]}
              />
              <Text style={{color: 'white', marginTop: 5}}>
                {item.post.likes}k
              </Text>
            </View>
            <View style={{marginBottom: 30}}>
              <EvilIcons name="comment" size={25} style={{color: 'white'}} />
              <Text style={{color: 'white', marginTop: 5}}>134k</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Feather name="send" size={22} style={{color: 'white'}} />
              <Text style={{color: 'white', marginTop: 5}}>242k</Text>
            </View>
            <View>
              <TouchableOpacity onPress={{}}>
                <Ionicons
                  name="ellipsis-vertical"
                  size={22}
                  style={{color: '#ffffff', top: 15}}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', bottom: 50, right: 0, left: 0}}>
          <View>
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
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 20}}>
                Welcome To InstaKilo App
              </Text>
              <Text style={{color: 'white', fontSize: 20}}>
                Best Anime 4k Reels
              </Text>
            </View>
          </View>
        </View>
        <View style={{position: 'absolute'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 25,
                  marginTop: 2,
                  fontWeight: '600',
                  left: 20,
                }}>
                Reels
              </Text>
            </View>
            <View style={{left: 310}}>
              <Ionicons
                name="camera-outline"
                size={35}
                style={{fontSize: 35, color: 'white'}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={reels} renderItem={renderReels} horizontal={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    //position: 'absolute',
  },
  backgroundVideo: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 800,
    width: 450,
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
    fontSize: 23,
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
    marginLeft: 10,
    top: 22,
    // marginTop: 10,
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
