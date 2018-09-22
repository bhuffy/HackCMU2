import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Six extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/six.png')} />
        <Text>Do you want to share your profile with anyone now?</Text>
        <Button
          title="Yes"
          onPress={() =>
            navigate('Home', { name: 'Jane' })
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
