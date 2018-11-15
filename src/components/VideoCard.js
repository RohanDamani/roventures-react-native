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
        containerStyle={{
          height: 605,
          padding: 0,
          shadowColor: '#333',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          borderWidth: 0,
        }}
        dividerStyle={{ display: 'none' }}
        titleStyle={{
          fontSize: 30,
          marginTop: 25,
          marginBottom: 20,
          textAlign: 'left',
          paddingLeft: 14,
          fontFamily: 'Georgia',
        }}
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
              <View
                style={{
                  marginTop: 40,
                  marginRight: 80,
                  backgroundColor: '#eee',
                  borderRadius: 25,
                  padding: 8,
                }}
              >
                <Icon name="hand-o-left" type="font-awesome" />
              </View>
              <View style={{ marginTop: 12 }}>
                <Text style={{ fontSize: 18 }}>Swipe</Text>
              </View>
              <View
                style={{
                  marginTop: 12,
                  marginLeft: 80,
                  backgroundColor: '#eee',
                  borderRadius: 25,
                  padding: 8,
                }}
              >
                <Icon name="hand-o-right" type="font-awesome" />
              </View>
            </View>
          )}
        {item.latitude &&
          item.longitude && (
            <MapView
              style={{
                alignSelf: 'stretch',
                height: 150,
                marginTop: 20,
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

export default VideoCard;
