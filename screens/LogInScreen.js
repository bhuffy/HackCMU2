import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button
} from "react-native";

export default class LogInScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/icon.png')} />
        <View style="styles.">
          <Button
            title="Log In"
            onPress={() =>
              navigate('One', { loggedin: 'Yes' })
            }
          />
          <Button
            title="Sign Up"
            onPress={() =>
              navigate('One', { loggedin: 'Yes' })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  btns: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});