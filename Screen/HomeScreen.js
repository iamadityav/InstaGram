import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DummyData} from '../Data/Dummydata';
import Post from '../component/Post';

const HomeScreen = () => {
  const renderChat = ({item}) => {
    return (
      <View>
        <View style={styles.statusroot}>
          <View style={styles.statusroott}>
            <Image source={item.Image} style={styles.profileimage} />
          </View>
          <Text style={{left: 15, alignSelf: 'center'}}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        {/* Header and Icon */}
        <View style={styles.header}>
          {/* <Text style={styles.headertext}>INSTAGRAM</Text> */}
          <Image
            source={require('../Data/images/Instagram-logo.png')}
            style={styles.headerimage}
          />
          <View style={styles.iconheader}>
            <Ionicons name="heart-outline" size={22} style={styles.icon} />
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              style={{right: 3}}
            />
          </View>
        </View>
        {/* Status and profile */}
        <View>
          <FlatList
            data={DummyData}
            renderItem={renderChat}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Post and like */}
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  statusroot: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerimage: {
    height: 30,
    width: 110,
    left: 10,
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
  statusroot: {
    width: '100%',
    height: 105,
  },
  statusroott: {
    backgroundColor: '#d48b8bf',
  },
  profileimage: {
    top: 6,
    height: 80,
    width: 80,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
    marginLeft: 8,
  },
  postContainer: {
    backgroundColor: '#a79494',
    height: '70%',
  },
});
