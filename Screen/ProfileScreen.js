import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import NewIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import StoryHighlight from '../component/StoryHighlight';
import ProfilePost from '../component/ProfilePost';
import ModalScreen from '../component/ModalScreen';
import EllipseModal from '../component/EllipseModal';
import HamburgerModal from '../component/HamburgerModal';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.post.data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isburgerModalVisible, setIsburgerModalVisible] = useState(false);
  console.log('ProfileScreen', data);

  const toggle = () => {
    setIsModalVisible(!isModalVisible);
  };
  const toggleburger = () => {
    setIsburgerModalVisible(!isburgerModalVisible);
  };
  const onPressBurger = () => {
    toggleburger();
  };
  const onPressarrow = () => {
    toggle();
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
          <TouchableOpacity onPress={onPressarrow}>
            <Icon
              name="arrow-down"
              size={13}
              style={[styles.plusicon, {marginTop: 5, left: 5}]}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', right: 10}}>
          <Icons name="plus-square-o" size={22} style={styles.plusicon} />
          <TouchableOpacity onPress={onPressBurger}>
            <Ionicons name="menu" size={22} style={styles.menuicon} />
          </TouchableOpacity>
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
            marginTop: 20,
            justifyContent: 'space-between',
            right: 25,
            alignItems: 'center',
          }}>
          {/* Post */}
          <View style={{right: 45, marginTop: 2}}>
            <Text style={{fontWeight: '500', marginLeft: 9, fontSize: 22}}>
              3
            </Text>
            <Text>Posts</Text>
          </View>
          {/* Followers */}
          <View style={{right: 23, marginTop: 3}}>
            <Text style={{fontWeight: '500', marginLeft: 9, fontSize: 21}}>
              930
            </Text>
            <Text>Followers</Text>
          </View>
          {/* Following */}
          <View style={{marginTop: 3}}>
            <Text style={{fontWeight: '500', marginLeft: 9, fontSize: 21}}>
              804
            </Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      {/* About Text */}
      <View style={{marginTop: 10}}>
        <Text style={{left: 10}}>Aditya Verma 👽</Text>
        <Text style={{left: 10}}>Digit-Insurance 👨🏻‍💻</Text>
        <Text style={{left: 10}}>Bangalore 📍</Text>
      </View>
      {/* Buttons */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          height: 100,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <StoryHighlight />
      </ScrollView>
      <View
        style={{
          height: 30,
          width: '100%',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <NewIcon name="grid" size={25} style={{right: 40, top: 2}} />
        <OctIcon name="video" size={25} style={{top: 2}} />
        <NewIcon name="contacts-outline" size={25} style={{left: 33, top: 2}} />
      </View>
      <View
        style={{
          backgroundColor: '#8e8e8e',
          width: '100%',
          height: 0.5,
        }}
      />
      {/* Post in profile */}
      <View style={{height: 320, backgroundColor: '#e4e4e4'}}>
        <ProfilePost />
      </View>
      {/* Bottom Half Modal */}
      <View style={styles.modalContent}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggle}
          style={styles.view}>
          <ModalScreen />
        </Modal>
      </View>
      <Modal
        swipeDirection={['down']}
        isVisible={isburgerModalVisible}
        onBackdropPress={toggleburger}
        style={styles.view}>
        <HamburgerModal toggleburger={toggleburger} />
      </Modal>
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
    marginTop: 20,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
