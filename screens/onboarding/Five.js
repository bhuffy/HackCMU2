import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Five extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/five.png')} />
        <Text>Do you take birth control?</Text>
        <Button
          title="Yes"
          onPress={() =>
            navigate('Six', { birth_control: 'Yes' })
          }
        />
        <Button
          title="No"
          onPress={() =>
            navigate('Six', { birth_control: 'No' })
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
