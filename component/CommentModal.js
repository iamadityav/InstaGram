import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const CommentModal = () => {
  const item = useSelector(state => state.post.data);
  return (
    <View style={styles.root}>
      <View style={styles.line} />
      {/* Comment */}
      <View style={styles.textcontainer}>
        <View>
          <Text style={styles.text}>Comments</Text>
        </View>
        <View style={styles.feathericon}>
          <Feather name="send" size={22} />
        </View>
      </View>
      {/* Line */}
      <View
        style={{
          backgroundColor: '#e3e3e3',
          height: 1,
          width: '100%',
          marginTop: 8,
        }}
      />
      {/* Below View */}
      {/* First comment */}
      <View style={styles.profilenamee}>
        <Image
          source={require('../Data/images/Shubham.png')}
          style={styles.profileimage}
        />
        <View>
          <Text style={styles.profilenametext}>Shubham</Text>
          <Text style={styles.commenttext}>Nice Pictures Bro</Text>
        </View>
      </View>
      {/* Second Comment */}
      <View style={styles.profilenamee}>
        <Image
          source={require('../Data/images/Amlan.png')}
          style={styles.profileimage}
        />
        <View>
          <Text style={styles.profilenametext}>Amlan</Text>
          <Text style={styles.commenttext}>Great View</Text>
        </View>
      </View>
      {/* Third Comment */}
      <View style={styles.profilenamee}>
        <Image
          source={require('../Data/images/Prakhar.png')}
          style={styles.profileimage}
        />
        <View>
          <Text style={styles.profilenametext}>Prakhar</Text>
          <Text style={styles.commenttext}>Nice Bro</Text>
        </View>
      </View>
      {/* Add Comment */}
      <View style={styles.commentcontainer}>
        <View style={styles.imagecontainer}>
          <Image source={item[0].Image} style={styles.profileimage} />
        </View>
        <View style={styles.commenttextcontainer}>
          <TextInput
            placeholder="Add Comment here"
            style={styles.placeholder}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.feathericon2}>
            <Feather name="send" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  root: {
    height: 400,
    backgroundColor: '#ffffff',
  },
  line: {
    backgroundColor: '#000000',
    width: 40,
    height: 6,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  textcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 18,
  },
  text: {
    fontSize: 20,
  },
  feathericon: {
    left: 135,
  },
  feathericon2: {
    marginTop: 23,
    marginLeft: 5,
  },
  profileimage: {
    top: 1.5,
    height: 50,
    width: 50,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 10,
    borderRadius: 50,
    marginLeft: 1.5,
  },
  profilenametext: {
    top: 10,
    fontWeight: '600',
    marginLeft: 10,
    width: '200%',
    marginTop: 0,
  },
  profilenamee: {
    flexDirection: 'row',
    marginBottom: 5,
    width: 200,
    height: 30,
    borderRadius: 53,
    marginLeft: 8,
    marginTop: 30,
    marginLeft: 20,
  },
  commenttext: {
    marginTop: 10,
    marginLeft: 10,
  },
  commentcontainer: {
    flexDirection: 'row',
    width: 400,
    height: 70,
    marginLeft: 8,
    marginTop: 35,
    marginLeft: 20,
  },
  commenttextcontainer: {
    height: 40,
    width: 300,
    borderRadius: 15,
    backgroundColor: '#dedede',
    marginTop: 15,
    marginLeft: 5,
  },
  placeholder: {
    marginTop: 10,
    marginLeft: 10,
  },
  imagecontainer: {
    marginTop: 10,
    marginLeft: 5,
  },
});
