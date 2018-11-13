import React from 'react';
import { Card, Icon } from 'react-native-elements';
import { Text, View } from 'react-native';
import VideoPlayer from './VideoPlayer';
import { MapView } from 'expo';
// import { styles } from '../stylesheet';

class VideoCard extends React.Component {
  render() {
    const { item, itemIndex, activeIndex } = this.props;
    return (
      <Card
        title={item.text}
        containerStyle={{ height: 605, padding: 8 }}
        dividerStyle={{ display: 'none' }}
        titleStyle={{ fontSize: 30, marginTop: 20, marginBottom: 20 }}
      >
        <VideoPlayer
          item={item}
          activeIndex={activeIndex}
          itemIndex={itemIndex}
        />
        {!item.latitude &&
          !item.longitude && (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <View style={{ marginTop: 40, marginRight: 50 }}>
                <Icon name="hand-o-left" type="font-awesome" />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text>Swipe</Text>
              </View>
              <View style={{ marginTop: 20, marginLeft: 50 }}>
                <Icon name="hand-o-right" type="font-awesome" />
              </View>
            </View>
          )}
        {item.latitude &&
          item.longitude && (
            <MapView
              style={{ alignSelf: 'stretch', height: 150, marginTop: 20 }}
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

export default VideoCard;
