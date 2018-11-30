import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';
import { MapView } from 'expo';
import { resizeVertical } from '../utils/resize';

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 65,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}
        >
          <Text
            style={{
              fontSize: resizeVertical(26, 30, 32, 32, 36, 46,)
            }}
          >
            Last Seen Here
          </Text>
        </View>
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
