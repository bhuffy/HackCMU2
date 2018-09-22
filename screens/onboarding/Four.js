import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Four extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/four.png')} />
        <Text>Do you remember when you last had your period?</Text>
        <Button
          title="Yes"
          onPress={() =>
            navigate('Five', { period: 'Yes' })
          }
        />
        <Button
          title="No"
          onPress={() =>
            navigate('Five', { period: 'No' })
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
