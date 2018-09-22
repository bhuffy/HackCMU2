import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class Two extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/two.png')} />
        <Text>What is your birthday?</Text>

        <TextInput>
        <Button
          title="Next"
          onPress={() =>
            navigate('Three', { birth_month: 'January', birth_day: '19', birth_year: '2000' })
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

