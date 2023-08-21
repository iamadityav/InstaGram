import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './Screen/HomeScreen';
import SearchScreen from './Screen/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReelScreen from './Screen/ReelScreen';
import ProfileScreen from './Screen/ProfileScreen';
import AddPostScreen from './Screen/AddPostScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="add-circle-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ReelScreen"
          component={ReelScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="videocam" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('./Data/images/Aditya.jpeg')}
                style={{height: 30, width: 30, borderRadius: 30}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
