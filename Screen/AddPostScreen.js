import React from 'react';
import {View, Text, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddPostScreen = () => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera error:', response.error);
      } else {
        // Here you can access the selected image using response.uri
        console.log('Selected image:', response.uri);
      }
    });
  };

  return (
    <SafeAreaView>
      <Text>AddPostScreen</Text>
      <Button title="Open Camera" onPress={openCamera} />
    </SafeAreaView>
  );
};

export default AddPostScreen;
