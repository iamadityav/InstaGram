import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

const ModalScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.hardline} />
      <View
        style={{
          backgroundColor: '#8e8e8e',
          width: '100%',
          height: 0.5,
          marginTop: 30,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../Data/images/Aditya.jpeg')}
          style={styles.image}
        />
        <Text style={{marginLeft: 15, marginTop: 35, fontSize: 18}}>
          iamadityav
        </Text>
        <Materialicon
          name="check-circle"
          color="#3c89ee"
          size={25}
          style={{marginTop: 35, marginLeft: 160}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#8e8e8e',
          width: '100%',
          height: 0.5,
        }}
      />
      <View
        style={{
          height: 40,
          width: 120,
          backgroundColor: '#3c89ee',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 140,
          marginTop: 20,
          borderRadius: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('AddAccount');
          }}>
          <Text style={{color: '#ffffff', fontWeight: '700'}}>Add Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreen;
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 50,
  },
  root: {
    height: 230,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  hardline: {
    backgroundColor: '#000000',
    width: 40,
    height: 6,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
