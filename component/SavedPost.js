import {View, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const SavedPost = () => {
  const postData = useSelector(state => state.post.data);

  const renderChat = ({item}) => (
    <View style={{padding: 0.5}}>
      {item.isBookmarked && (
        <Image source={item.Post} style={{height: 150, width: 130}} />
      )}
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

export default SavedPost;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: '100%',
  },
});
