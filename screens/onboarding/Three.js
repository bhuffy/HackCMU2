import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Three extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/three.png')} />
        <Text>Do you take prescription medications?</Text>
        <Button
          title="Yes"
          onPress={() =>
            navigate('Four', { meds: 'Yes' })
          }
        />
        <Button
          title="No"
          onPress={() =>
            navigate('Four', { meds: 'No' })
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
