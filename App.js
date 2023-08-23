import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/Store';
import HomeScreen from './Screen/HomeScreen';
import SearchScreen from './Screen/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReelScreen from './Screen/ReelScreen';
import ProfileScreen from './Screen/ProfileScreen';
import AddPostScreen from './Screen/AddPostScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SavedPostScreen from './Screen/SavedPostScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BottomScreenNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000000',
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
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomScreenNavigator"
            component={BottomScreenNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SavedPostScreen" component={SavedPostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
