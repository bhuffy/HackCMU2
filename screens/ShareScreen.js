import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class ShareScreen extends React.Component {
  static navigationOptions = {
    title: 'Shares',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
