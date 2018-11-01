import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';
import { MapView } from 'expo';

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View><Text>Captain Ro was last seen around here ~</Text></View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
              latitude: 33.9803,
              longitude: -118.4517,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
            <MapView.Marker
                coordinate={{
                    latitude: 33.9803,
                    longitude: -118.4517,
                }}
            />
        </MapView>
      </View>
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(Info);
