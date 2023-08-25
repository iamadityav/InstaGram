import 'react-native-gesture-handler';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
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
import PostScreen from './Screen/PostScreen';
import {DummyData} from './Data/Dummydata';

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BottomScreenNavigator = () => {
    const item = useSelector(state => state.post.data);
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
                source={item[0].Image}
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
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
