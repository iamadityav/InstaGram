import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ProfilePost = () => {
  const postData = useSelector(state => state.post.data);

  const renderChat = ({item}) => (
    <View style={{padding: 0.5}}>
      {console.log('Post Profile', item.Image)}
      <Image source={item.Post} style={{height: 150, width: 130}} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={renderChat}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // Ensures items are displayed in a row
  },
});

export default ProfilePost;
