import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MeScreen from '../screens/MeScreen';
import ShareScreen from '../screens/ShareScreen';
import { NavigatorIOS } from 'react-native';
import LogInScreen from '../screens/LogInScreen';



export default class code extends React.Component {
  render(){
    return(
      <OnboardingStack />
    );
  }
}


const OnboardingStack = createStackNavigator({
  Login: {
    screen: LogInScreen,
  }
})

OnboardingStack.navigationOptions = {

};
