import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feathericons from 'react-native-vector-icons/Feather';
import Evilicons from 'react-native-vector-icons/EvilIcons';

const EllipseModal = () => {
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
      {/* Buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View
          style={{
            height: 60,
            width: 150,
            marginLeft: 20,
            borderRadius: 20,
            backgroundColor: '#eaeaea',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 5}}>
            <Ionicons
              name="bookmark-outline"
              size={25}
              style={[styles.icon, {marginLeft: 4}]}
            />
            <Text style={{marginTop: 5, fontWeight: '500'}}>Save</Text>
          </View>
        </View>
        <View
          style={{
            height: 60,
            borderRadius: 20,
            width: 150,
            marginRight: 20,
            backgroundColor: '#eaeaea',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 5}}>
            <Ionicons
              name="qr-code-outline"
              size={25}
              style={[styles.icon, {marginLeft: 15}]}
            />
            <Text style={{marginTop: 5, fontWeight: '500'}}>QR code</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        {/* Add to favourites */}
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Octicons name="star" size={22} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            Favourites
          </Text>
        </View>
        {/* Unfollow */}
        <View
          style={{
            backgroundColor: '#eaeaea',
            width: '100%',
            height: 0.5,
            marginTop: 15,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Feathericons name="user-minus" size={22} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            Unfolllow
          </Text>
        </View>
        {/* About this account */}
        <View
          style={{
            backgroundColor: '#c4c4c4',
            width: '100%',
            height: 0.5,
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5}}>
          <Evilicons name="user" size={25} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            About This Account
          </Text>
        </View>
        {/* Why you're seeing this post */}
        <View
          style={{
            backgroundColor: '#c4c4c4',
            width: '100%',
            height: 0.5,
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            style={styles.icon}
          />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            Why you're seeing this post
          </Text>
        </View>
        {/* Hide */}
        <View
          style={{
            backgroundColor: '#c4c4c4',
            width: '100%',
            height: 0.5,
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Feathericons name="eye-off" size={22} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>Hide</Text>
        </View>
        {/* Report */}
        <View
          style={{
            backgroundColor: '#c4c4c4',
            width: '100%',
            height: 0.5,
            marginTop: 20,
            marginBottom: 10,
          }}
        />
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Octicons name="report" size={22} style={styles.icon} />
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 2}}>
            Report
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EllipseModal;

const styles = StyleSheet.create({
  icon: {},
});
