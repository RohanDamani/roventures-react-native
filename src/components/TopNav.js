import React from 'react';
import { Header } from 'react-native-elements';

export default class TopNav extends React.Component {
  render() {
    return (
      <Header
        centerComponent={{ text: 'RoVentures', style: { color: 'aqua' } }}
        outerContainerStyles={{ height: 90, backgroundColor: '#333',  borderBottomColor: '#777'}}

      />
    );
  }
}
