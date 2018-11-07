import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { styles } from '../stylesheet';
import Swipe from './Swipe';

class Videos extends React.Component {
  data = [
    {
      id: 0,
      text: 'Welcome',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Welcome/welcome.m3u8',
    },

    {
      id: 1,
      text: 'Seychelles',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Seychelles/seychelles-hls-2M.m3u8',
      image: '"http://photos.roventures.tv/Seychelles/G0530431.jpg"',
      latitude: 4.6796,
      longitude: 55.492,
    },
    {
      id: 2,
      text: 'Dubai',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Dubai/Dubai.m3u8',
      image: 'http://photos.roventures.tv/Dubai/IMG_2009.jpg',
      latitude: 25.2048,
      longitude: 55.4513,
    },
    {
      id: 3,
      text: 'BVI Boat Tour',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/BVIBoatTour/BVIBoatTour.m3u8',
      image:
        'https://s3.amazonaws.com/roventures-thumbnails/Thumbnails/BVIThumb.jpg',
      latitude: 18.4207,
      longitude: -64.64,
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <Swipe type={'video'} data={this.data} />
      </View>
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(Videos);
