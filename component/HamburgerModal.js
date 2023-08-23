import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import SavedPostScreen from '../Screen/SavedPostScreen';

const HamburgerModal = ({toggleburger}) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    toggleburger();
    navigation.navigate('SavedPostScreen');
  };

  return (
    <View style={{height: 500, backgroundColor: '#ffffff'}}>
      <View
        style={{
          backgroundColor: '#000000',
          width: 40,
          height: 6,
          marginTop: 10,
          alignSelf: 'center',
          borderRadius: 10,
        }}
      />
      {/* Settings */}
      <View style={{flexDirection: 'row', marginTop: 22, marginLeft: 10}}>
        <Ionicons name="settings-outline" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Settings and privacy
        </Text>
      </View>
      {/* Activity */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Ionicons name="timer-outline" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Your activity
        </Text>
      </View>
      {/* Archive */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Ionicons name="time-outline" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Archive
        </Text>
      </View>
      {/* Qr code */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Ionicons name="qr-code-outline" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          QR code
        </Text>
      </View>
      {/* Saved */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <TouchableOpacity onPress={onPressHandler}>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Ionicons name="bookmark-outline" size={22} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            Saved
          </Text>
        </View>
      </TouchableOpacity>
      {/* Supervision */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Icons name="user-friends" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Supervision
        </Text>
      </View>
      {/* Verified */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Octicons name="verified" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Meta Verified
        </Text>
        <View
          style={{
            height: 25,
            width: 60,
            backgroundColor: '#3c89ee',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 180,
            borderRadius: 20,
          }}>
          <Text style={{color: '#ffffff', fontWeight: '700'}}>NEW</Text>
        </View>
      </View>
      {/* List */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Octicons name="list-unordered" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Close friends
        </Text>
      </View>
      {/* Favourite */}
      <View
        style={{
          backgroundColor: '#c4c4c4',
          width: '100%',
          height: 0.5,
          marginTop: 10,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
        <Octicons name="star" size={22} style={styles.icon} />
        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
          Favourites
        </Text>
      </View>
    </View>
  );
};

export default HamburgerModal;
const styles = StyleSheet.create({
  icon: {},
});
