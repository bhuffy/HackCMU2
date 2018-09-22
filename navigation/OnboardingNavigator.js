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

/*
export default class code extends React.Component {
  render(){
    return(
      <NavigatorIOS
        initialRoute={{
          component: LogInScreen,
          title: 'code',
          
        }}
        style = {{flex: 1}}
      />
    );
  }
} 
*/


const OnboardingStack = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
  }
})

OnboardingStack.navigationOptions = {

};
