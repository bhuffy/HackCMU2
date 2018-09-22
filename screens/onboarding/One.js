import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Two from '../screens/Two'
import One from '../screens/One'

export default class One extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/one.png')} />
        <Text>What is your gender?</Text>
        alignItems: 'center',
        <Button
          title="Male"
          onPress={() =>
           this.props.navigation.push('Two')} />
          }
        />
        <Button
          title="Female"
          onPress={() =>
            this.props.navigation.push('Two')} />
          }
        />
        <Button
          title="Other"
          onPress={() =>
            navigate('Two', { gender: 'Other' })
          }
        />
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
});

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  }