import React from 'react';
import { ExpoLinksView } from '@expo/samples';
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

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.question}>Welcome to ShareCare!</Text>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.welcomeImage}
          />
        <Text style={styles.instructions}>press to finish your account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    flex: 0.75,
    width: 175,
    height: 80,
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: 100,
    marginBottom: 30
  },
  question: {
    flex: 0.25,
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 28,
    color: "grey",
    marginTop: 140,
  //  marginBottom: 30
  },
  instructions: {
    flexDirection: 'row',
  //  alignItems: 'center',
    fontSize: 20,
    color: "#d8d8d8",
    marginHorizontal: 66,
    flex: 0.5
  },

});
