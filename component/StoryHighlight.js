import {View, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const StoryHighlight = () => {
  const items = useSelector(state => state.post.data);

  const renderChat = ({item, index}) => {
    return (
      <View key={index} style={styles.highlightcard}>
        <Image source={item.highlight} style={styles.image} />
      </View>
    );
  };

  return (
    <ScrollView horizontal={true}>
      {items.map((item, index) => renderChat({item, index}))}
    </ScrollView>
  );
};

export default StoryHighlight;

const styles = StyleSheet.create({
  highlightcard: {
    width: 85,
    height: 85,
    borderRadius: 55,
    backgroundColor: '#cdcdcd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    top: 7,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 55,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  {item.map((data, index) =>
    renderChat(data, index), // Call the renderChat function for each item
  )}
</ScrollView> */
}
