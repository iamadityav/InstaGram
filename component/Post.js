import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {DummyData} from '../Data/Dummydata';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView, FlatList} from 'react-native';

const Post = () => {
  const renderPost = ({item}) => {
    return (
      <View style={styles.root}>
        <View style={styles.post}>
          <View style={styles.profilename}>
            <View style={styles.profilenamee}>
              <Image source={item.Image} style={styles.profileimage} />
              <Text style={styles.profilenametext}>{item.name}</Text>
            </View>
            <Ionicons
              name="ellipsis-vertical"
              size={22}
              style={styles.ellipseicon}
            />
          </View>
          <View>
            <Image source={item.Image} style={styles.postimage} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 5,
            }}>
            <View style={styles.iconpress}>
              <Ionicons name="heart-outline" size={30} style={styles.icon} />
              <Ionicons
                name="chatbubble-outline"
                size={26}
                style={{
                  ...styles.icon,
                  transform: [{rotateY: '180deg'}],
                  marginLeft: 5,
                  top: 1,
                }}
              />
              <Ionicons
                name="send-outline"
                size={25}
                style={(styles.icon, {marginLeft: 8, top: 2})}
              />
            </View>
            <Ionicons name="bookmark-outline" size={26} style={styles.icon} />
          </View>
        </View>
        <View
          style={{backgroundColor: '#e3e3e3', height: 1, width: '100%', top: 5}}
        />
      </View>
    );
  };
  return (
    <View style={styles.postContainer}>
      <FlatList
        data={DummyData}
        renderItem={renderPost}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 5,
  },
  post: {
    // backgroundColor: '#eeeded',
  },
  profilename: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  profilenamee: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  profileimage: {
    top: 6,
    height: 30,
    width: 30,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
    marginLeft: 8,
  },
  profilenametext: {
    top: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
  iconpress: {
    flexDirection: 'row',
  },
  ellipseicon: {
    top: 10,
  },
  postimage: {
    width: '100%',
    height: 400,
    marginRight: 5,
  },
});
