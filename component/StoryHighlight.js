import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StoryHighlight = () => {
  return (
    <View style={styles.highlightcard}>
      <Text>jbs</Text>
    </View>
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
});
