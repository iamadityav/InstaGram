import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native';

const AddPostScreen = () => {
  const onPressHandler = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      console.log(response);
    });
  };
  return (
    <SafeAreaView>
      <Button title="Open Camera" onPress={onPressHandler} />
    </SafeAreaView>
  );
};

export default AddPostScreen;
