import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setLike} from '../redux/PostSlice';
import {setBookmark} from '../redux/PostSlice';
import {toggleTouch} from '../redux/PostSlice';
import {SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import EllipseModal from './EllipseModal';

const Post = () => {
  const [isModalVisible, setModalVisble] = useState(false);
  const postData = useSelector(state => state.post.data);
  const dispatch = useDispatch();
  console.log('data', postData);

  const onPressHandler = postId => {
    dispatch(setLike(postId));
  };

  const onBookmark = postId => {
    dispatch(setBookmark(postId));
  };

  const toggletouch = id => {
    console.log('id', id);
    dispatch(toggleTouch(id));
  };

  const toggleburger = () => {
    setModalVisble(!isModalVisible);
  };

  const openModal = () => {
    toggleburger();
  };

  const renderPost = ({item}) => {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.post}>
            <View style={styles.profilename}>
              <View>
                <TouchableOpacity onPress={() => toggletouch(item.id)}>
                  <View
                    style={[
                      styles.profilenamee,
                      item.touch && styles.touchedStatus,
                    ]}>
                    <Image source={item.Image} style={styles.profileimage} />
                    <Text style={styles.profilenametext}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <Ionicons
                name="ellipsis-vertical"
                size={22}
                style={styles.ellipseicon}
              /> */}
              <TouchableOpacity onPress={openModal}>
                <Ionicons
                  name="ellipsis-vertical"
                  size={22}
                  style={styles.ellipseicon}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Image source={item.Post} style={styles.postimage} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 5,
              }}>
              <View style={styles.iconpress}>
                <TouchableOpacity onPress={() => onPressHandler(item.id)}>
                  <Ionicons
                    name={item.isLiked ? 'heart' : 'heart-outline'}
                    size={25}
                    style={[
                      styles.icon,
                      item.isLiked ? styles.coloredIcon : null,
                    ]}
                  />
                </TouchableOpacity>
                <Ionicons
                  name="chatbubble-outline"
                  size={21}
                  style={{
                    ...styles.icon,
                    transform: [{rotateY: '180deg'}],
                    marginLeft: 5,
                    top: 1,
                    left: 8,
                  }}
                />
                <Icons
                  name="send"
                  size={20}
                  style={(styles.icon, {marginLeft: 8, top: 1, left: 15})}
                />
              </View>
              <TouchableOpacity onPress={() => onBookmark(item.id)}>
                <Ionicons
                  name={item.isBookmarked ? 'bookmark' : 'bookmark-outline'}
                  size={25}
                  style={[
                    styles.icon,
                    item.isBookmarked ? styles.bookmarkcIon : null,
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', top: 5}}>
            <Image
              source={require('../Data/images/Amlan.png')}
              style={styles.profileimagee}
            />
            <Text style={{top: 5, fontSize: 18, top: 9, left: 5}}>
              Liked by Amlan & {item.likes} others.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#e3e3e3',
              height: 1,
              width: '100%',
              top: 15,
            }}
          />
        </View>
      </>
    );
  };
  return (
    <>
      <View style={styles.postContainer}>
        <FlatList
          data={postData}
          renderItem={renderPost}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Modal
        swipeDirection={['down']}
        isVisible={isModalVisible}
        onBackdropPress={toggleburger}
        style={styles.modalview}
        testID={'modal'}>
        <EllipseModal />
      </Modal>
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 20,
  },
  post: {
    //flex: 1,
  },
  profilename: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilenamee: {
    flexDirection: 'row',
    marginBottom: 5,
    width: 33,
    height: 33,
    borderRadius: 53,
    backgroundColor: '#da5555',
    marginLeft: 8,
  },
  coloredIcon: {
    color: '#ff0000',
  },
  bookmarkcIon: {
    color: '#252525',
  },
  profileimage: {
    top: 1.5,
    height: 30,
    width: 30,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
    marginLeft: 1.5,
  },
  profileimagee: {
    top: 6,
    height: 25,
    width: 25,
    paddingBottom: 6,
    marginBottom: 6,
    paddingTop: 8,
    borderRadius: 48,
    marginLeft: 5,
  },
  profilenametext: {
    top: 10,
    fontWeight: '600',
    marginLeft: 5,
    width: '200%',
  },
  iconpress: {
    flexDirection: 'row',
    left: 10,
  },
  ellipseicon: {
    marginTop: 10,
  },
  postimage: {
    width: '99.5%',
    height: 400,
    alignSelf: 'center',
  },
  modalview: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  touchedStatus: {
    backgroundColor: '#ffffff',
  },
});
