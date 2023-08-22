import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const data = useSelector(state => state.post.data);
  console.log('ProfileScreen', data);

  const renderChat = ({item}) => {
    <View style={styles.highlightcard}>
      <Text>{item.name}</Text>
    </View>;
  };
  return (
    <SafeAreaView>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            style={styles.lockicon}
          />
          <Text style={styles.username}>iamadityav</Text>
          <Icon
            name="arrow-down"
            size={13}
            style={[styles.plusicon, {top: 5, left: 5}]}
          />
        </View>
        <View style={{flexDirection: 'row', right: 10}}>
          <Icons name="plus-square-o" size={22} style={styles.plusicon} />
          <Ionicons name="menu" size={22} style={styles.menuicon} />
        </View>
      </View>
      {/* About Section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../Data/images/Aditya.jpeg')}
          style={styles.profileimage}
        />
        <View
          style={{
            flexDirection: 'row',
            top: 50,
            justifyContent: 'space-between',
            right: 25,
            alignItems: 'baseline',
          }}>
          {/* Post */}
          <View style={{right: 45}}>
            <Text style={{fontWeight: '500', fontSize: 23}}>3</Text>
            <Text>Posts</Text>
          </View>
          {/* Followers */}
          <View style={{right: 23}}>
            <Text style={{fontWeight: '500', fontSize: 23}}>931</Text>
            <Text>Followers</Text>
          </View>
          {/* Following */}
          <View>
            <Text style={{fontWeight: '500', fontSize: 23}}>805</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      {/* About Text */}
      <View>
        <Text style={{top: 30, left: 10}}>Aditya Verma 👽</Text>
        <Text style={{top: 30, left: 10}}>Digit-Insurance 👨🏻‍💻</Text>
        <Text style={{top: 30, left: 10}}>Bangalore 📍</Text>
      </View>
      {/* Buttons */}
      <View
        style={{
          flexDirection: 'row',
          top: 70,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 30,
            width: 130,
            left: 10,
            backgroundColor: '#cacaca',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{top: 6}}>Edit Profile</Text>
        </View>
        <View
          style={{
            height: 30,
            width: 130,
            right: 10,
            backgroundColor: '#cacaca',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{top: 6}}>Share Profile</Text>
        </View>
        <View
          style={{
            height: 30,
            width: 50,
            right: 30,
            backgroundColor: '#cacaca',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Ionicons
            name="person-add-outline"
            size={18}
            style={[styles.menuicon, {bottom: 3, top: 6, left: 5}]}
          />
        </View>
      </View>
      {/* Highlights */}
      <View style={{height: 100, backgroundColor: '#ffffff', top: 80}}>
        <FlatList
          data={data}
          renderItem={renderChat}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 5,
    alignItems: 'baseline',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
  },
  lockicon: {
    marginRight: 5,
    top: 2,
  },
  plusicon: {
    marginRight: 13,
  },
  menuicon: {
    marginRight: 13,
  },
  profileimage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    left: 8,
    top: 20,
  },
  highlightcard: {
    // width: 85,
    // height: 85,
    // borderRadius: 55,
    // backgroundColor: '#df1616',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft: 8,
    // top: 80,
  },
});
