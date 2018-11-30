import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-native-elements';
import { Text, View, ActivityIndicator } from 'react-native';
import VideoPlayer from './VideoPlayer';
import { MapView } from 'expo';
import { resizeVertical } from '../utils/resize';
import { SCREEN_WIDTH } from '../stylesheet';

class VideoCard extends React.Component {
  render() {
    const { item, itemIndex, activeIndex, isVideoLoaded } = this.props;
    return (
      <Card
        title={item.text}
        containerStyle={{
          height: resizeVertical(400, 491, 605, 687, 830, 1150),
          padding: 0,
          shadowColor: '#333',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          borderWidth: 0,
        }}
        dividerStyle={{ display: 'none' }}
        titleStyle={{
          fontSize: resizeVertical(30, 34, 30, 36, 38, 46),
          marginTop: 25,
          marginBottom: 20,
          textAlign: item.welcome ? 'center' : 'left',
          paddingLeft: 14,
          fontFamily: 'Georgia',
        }}
      >
        <VideoPlayer
          item={item}
          activeIndex={activeIndex}
          itemIndex={itemIndex}
        />
        {!isVideoLoaded &&
          activeIndex === 0 && (
            <View
              style={{
                position: 'absolute',
                right: SCREEN_WIDTH / 2.5,
                top: resizeVertical(150, 179, 206, 220, 300, 390),
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          )}
        {item.welcome && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#eee',
              borderRadius: 25,
              marginTop: resizeVertical(45, 60, 60, 100, 90),
              marginRight: 30,
              marginLeft: 30,
              padding: 8,
            }}
          >
            <View
              style={{
                marginRight: 80,
              }}
            >
              <Icon name="chevron-left" type="font-awesome" color="#777" />
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Swipe</Text>
            </View>
            <View
              style={{
                marginLeft: 80,
              }}
            >
              <Icon name="chevron-right" type="font-awesome" color="#777" />
            </View>
          </View>
        )}
        {!item.welcome && (
          <MapView
            style={{
              alignSelf: 'stretch',
              height: resizeVertical(140, 181, 235, 290, 280, 431),
              borderWidth: 1,
              borderColor: '#eee',
            }}
            initialRegion={{
              latitude: item.latitude,
              longitude: item.longitude,
              latitudeDelta: 20,
              longitudeDelta: 20,
            }}
            scrollEnabled={false}
          >
            <MapView.Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.label}
            />
          </MapView>
        )}
      </Card>
    );
  }
}

export default connect(state => ({
  isVideoLoaded: state.isVideoLoaded,
}))(VideoCard);
