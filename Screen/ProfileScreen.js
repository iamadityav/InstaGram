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
import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import NewIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import StoryHighlight from '../component/StoryHighlight';
import ProfilePost from '../component/ProfilePost';
import ModalScreen from '../component/ModalScreen';
import HamburgerModal from '../component/HamburgerModal';
import ProfileReelSection from '../component/ProfileReelSection';
import TagPostSection from '../component/TagPostSection';
import {setProfilePic} from '../redux/PostSlice';

const ProfileScreen = () => {
  const image = require('../Data/images/Aditya.jpeg');
  const data = useSelector(state => state.post.data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isburgerModalVisible, setIsburgerModalVisible] = useState(false);
  const [tabNo, setTabno] = useState(1);
  const [selectedImage, setSelecetedImage] = useState(null);
  const [profilePic, changedProfilePic] = useState(false);

  const TabRenderHandler = tabNo => {
    setTabno(tabNo);
  };

  const dispatch = useDispatch();

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

  const openImageLibrary = async () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    await launchImageLibrary(options, response => {
      setSelecetedImage(response.assets[0].uri);
      dispatch(setProfilePic(response.assets[0].uri));
      changedProfilePic(true);
    });
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
        <TouchableOpacity onPress={openImageLibrary}>
          <Image
            source={profilePic ? {uri: selectedImage} : image}
            style={styles.profileimage}
          />
        </TouchableOpacity>
        <View style={styles.abourSectionContainer}>
          {/* Post */}
          <View style={{right: 45, marginTop: 2}}>
            <Text style={styles.postText}>1</Text>
            <Text>Posts</Text>
          </View>
          {/* Followers */}
          <View style={{right: 23, marginTop: 3}}>
            <Text style={styles.followersText}>930</Text>
            <Text>Followers</Text>
          </View>
          {/* Following */}
          <View style={{marginTop: 3}}>
            <Text style={styles.followingText}>804</Text>
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
      <View style={styles.buttonContainer}>
        <View style={styles.editProfileContainer}>
          <Text style={{top: 6}}>Edit Profile</Text>
        </View>
        <View style={styles.shareProfileContainer}>
          <Text style={{top: 6}}>Share Profile</Text>
        </View>
        <View style={styles.personAddOutlineContainer}>
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
      <View style={styles.postHeaderRootContainer}>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => TabRenderHandler(1)}>
          <View
            style={
              tabNo === 1
                ? styles.innerActiveContainer
                : styles.innerInActiveContainer
            }>
            <NewIcon name="grid" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => TabRenderHandler(2)}>
          <View
            style={
              tabNo === 2
                ? styles.innerActiveContainer
                : styles.innerInActiveContainer
            }>
            <OctIcon name="video" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => TabRenderHandler(3)}>
          <View
            style={
              tabNo === 3
                ? styles.innerActiveContainer
                : styles.innerInActiveContainer
            }>
            <NewIcon name="contacts-outline" size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#8e8e8e',
          width: '100%',
          height: 0.5,
        }}
      />
      {/* Post in profile */}
      <View style={{height: 500, backgroundColor: '#e4e4e4'}}>
        {tabNo === 1 && <ProfilePost />}
        {tabNo === 2 && <ProfileReelSection />}
        {tabNo === 3 && <TagPostSection />}
        {/* <ProfilePost /> */}
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
  postHeaderRootContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  touchContainer: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerActiveContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingVertical: 5,
  },
  innerInActiveContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  abourSectionContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    right: 25,
    alignItems: 'center',
  },
  postText: {
    fontWeight: '500',
    marginLeft: 9,
    fontSize: 21,
    marginTop: 1.5,
  },
  followersText: {
    fontWeight: '500',
    marginLeft: 9,
    fontSize: 21,
  },
  followingText: {
    fontWeight: '500',
    marginLeft: 9,
    fontSize: 21,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  editProfileContainer: {
    height: 30,
    width: 130,
    left: 31,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    borderRadius: 10,
  },
  shareProfileContainer: {
    height: 30,
    width: 130,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    borderRadius: 10,
  },
  personAddOutlineContainer: {
    height: 30,
    width: 50,
    right: 30,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    borderRadius: 10,
  },
});
