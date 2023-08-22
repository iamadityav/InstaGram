import {View, FlatList, Image, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const postData = useSelector(state => state.post.data);
  console.log('Profile', postData);

  const RenderPost = ({item, id}) => {
    console.log('RenderPost', item.Image);

    return (
      <SafeAreaView>
        <Text>{item.name}</Text>
        {/* <Image source={{uri: item.Image}} style={{width: 100, height: 100}} /> */}
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={RenderPost}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProfileScreen;
