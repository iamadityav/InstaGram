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
import {DummyData} from '../Data/Dummydata';
import Post from '../component/Post';

const HomeScreen = () => {
  const [data, setData] = useState(DummyData);

  const toggleTouch = id => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return {...item, touch: !item.touch};
      }
      return item;
    });
    setData(updatedData);
  };

  const renderChat = ({item}) => {
    return (
      <View>
        <View style={styles.statusroot}>
          <TouchableOpacity onPress={() => toggleTouch(item.id)}>
            <View
              style={[styles.statusroott, item.touch && styles.touchedStatus]}>
              <Image source={item.Image} style={styles.profileimage} />
            </View>
          </TouchableOpacity>
          <Text style={{left: 5, alignSelf: 'center'}}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View>
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
      </View>
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
  statusroott: {
    width: 85,
    height: 85,
    borderRadius: 55, // Make it half the width and height to create a circle
    backgroundColor: '#da5555', // You can set a background color if needed
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  touchedStatus: {
    backgroundColor: '#ffffff', // Change background color when touch is true
  },
  profileimage: {
    top: 4,
    height: 80,
    width: 80,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
    //marginLeft: 8,
  },
  postContainer: {
    backgroundColor: '#a79494',
    height: '70%',
  },
});
