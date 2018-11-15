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
        title={item.welcome ? " " : item.text}
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
        {item.welcome && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#eee',
                borderRadius: 25,
                marginTop: 60,
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
