import {View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import SearchPost from '../component/SearchPost';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      {/* Search Bar */}
      <View style={styles.searchbar}>
        <TextInput placeholder="Search" style={styles.textinput}></TextInput>
      </View>
      <View style={styles.photos}>
        <SearchPost />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  searchbar: {
    height: 30,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textinput: {
    color: '#000000',
  },
  photos: {
    height: '100%',
    backgroundColor: '#dfdfdf',
    marginTop: 10,
  },
});
