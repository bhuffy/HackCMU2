import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import Two from '../onboarding/Two';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import {NavigatorIOS } from 'react-native'

import { MonoText } from '../../components/StyledText';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
//    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

        <Image
          source={require('../../assets/images/one.png')}
          style={styles.welcomeImage}
        />
        <Text style = {styles.question}>What is your gender?</Text>
        <View style ={styles.button}>
          <Button
            title="Male"
            color="white"
            onPress={() =>
              this.props.navigation.navigate('Two')} />
            }
            />
        </View>
        <View style ={styles.button1}>
          <Button
            title="Female"
            color="white"
            onPress={() =>
              this.props.navigation.navigate('Two')} />
            }
            />
        </View>
        <View style ={styles.button2}>
          <Button
            title="Other"
            color="white"
            onPress={() =>
              this.props.navigation.navigate('Two')} />
            }
            />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    flex: 0.9,
    width: 175,
    height: 80,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 100,
  },
  question: {
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  button: {
    height:48,
    padding:6,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#adefde',
    marginBottom: 10,
    marginHorizontal: 25,
  },
  button1: {
    height:48,
    padding:6,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#ffb6a4',
    marginBottom: 10,
    marginHorizontal: 25,
  },
  button2: {
    height:48,
    padding:6,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#ffd2c5',
    marginBottom: 10,
    marginHorizontal: 25,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
