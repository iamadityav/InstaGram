import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native';

const AddPostScreen = () => {
  const onPressHandler = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
      }
    });
  };

  return (
    <SafeAreaView>
      <Button title="Open Camera" onPress={onPressHandler} />
    </SafeAreaView>
  );
};

export default AddPostScreen;
