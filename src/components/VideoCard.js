import React from 'react';
import { Card, Icon } from 'react-native-elements';
import { Text, View } from 'react-native';
import VideoPlayer from './VideoPlayer';
import { MapView } from 'expo';
// import { styles } from '../stylesheet';

class VideoCard extends React.Component {
  render() {
    const { item, i } = this.props;
    return (
      <Card title={item.text} containerStyle={{ height: 605, padding: 8 }}>
        {item.latitude && item.longitude && <Text>Published: August 2018</Text>}
        <VideoPlayer item={item} activeIndex={this.state.index} itemIndex={i} />
        {!item.latitude &&
          !item.longitude && (
            <View>
              <Icon name="hand-o-left" type="font-awesome" />
              <Text>Swipe</Text>
              <Icon name="hand-o-right" type="font-awesome" />
            </View>
          )}
        {item.latitude &&
          item.longitude && (
            <MapView
              style={{ alignSelf: 'stretch', height: 220 }}
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
