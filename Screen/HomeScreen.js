import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Post from '../component/Post';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTouch} from '../redux/PostSlice';

const HomeScreen = () => {
  const item = useSelector(state => state.post.data);
  const dispatch = useDispatch();

  const toggle = id => {
    dispatch(toggleTouch(id));
  };

  const renderChat = ({item: chatItem}) => {
    return (
      <View>
        <View style={styles.statusroot}>
          <TouchableOpacity onPress={() => toggle(chatItem.id)}>
            <View
              style={[
                styles.statusroott,
                chatItem.touch && styles.touchedStatus,
              ]}>
              <Image source={chatItem.Image} style={styles.profileimage} />
            </View>
          </TouchableOpacity>
          <Text style={{left: 5, alignSelf: 'center'}}>{chatItem.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View>
        {/* Header and Icon */}
        <View style={styles.header}>
          <Image
            source={require('../Data/images/Instagram.png')}
            style={styles.headerimage}
          />
          <TouchableOpacity>
            <View style={styles.iconheader}>
              <Ionicons name="heart-outline" size={22} style={styles.icon} />
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={22}
                style={{right: 3}}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Status and profile */}
        <View>
          <FlatList
            data={item}
            renderItem={renderChat}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Post and like */}
        <Post />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  statusroot: {
    height: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerimage: {
    height: 35,
    width: 110,
    left: 10,
    marginBottom: 2,
  },
  icon: {
    right: 8,
  },
  iconheader: {
    flexDirection: 'row',
  },
  headertext: {
    fontFamily: 'Bradley Hand',
    fontSize: 25,
    left: 5,
  },
  statusroott: {
    width: 84,
    height: 84,
    borderRadius: 54,
    backgroundColor: '#da5555',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  touchedStatus: {
    backgroundColor: '#ffffff',
  },
  profileimage: {
    top: 4,
    height: 80,
    width: 80,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
  },
  postContainer: {
    backgroundColor: '#ffffff',
    height: '70%',
  },
});

// {selectedItem && (
//   <View style={styles.selectedPostContainer}>
//     <Image source={selectedItem.Post} style={styles.selectedPostImage} />
//     {/* You can display post details here */}
// <View>
//<FlatList
//  data={item}
//  renderItem={renderChat}
//  horizontal={true}
// showsHorizontalScrollIndicator={false}
///>
//</View>
//   </View>
// )}
