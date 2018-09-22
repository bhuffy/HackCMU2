import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MeScreen from '../screens/MeScreen';
import ShareScreen from '../screens/ShareScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const MeStack = createStackNavigator({
  Me: MeScreen,
});

MeStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

const ShareStack = createStackNavigator({
  Share: ShareScreen,
});

ShareStack.navigationOptions = {
  tabBarLabel: 'Shared',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person-add${focused ? '' : '-outline'}` : 'md-person-add'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MeStack,
  ShareStack,
});
