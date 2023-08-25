import {View, Image, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ProfilePost = () => {
  const postData = useSelector(state => state.post.data);

  const renderChat = ({item}) => (
    <View style={{padding: 0.5}}>
      <Image source={item.Post} style={{height: 150, width: 142}} />
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
    flex: 1,
  },
});

export default ProfilePost;
