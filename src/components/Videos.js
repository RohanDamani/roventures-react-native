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
        'https://roventures-videos-hls.s3-us-west-1.amazonaws.com/Welcome1/welcome1.m3u8',
      welcome: true,
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
      text: 'India',
      uri:
        'https://roventures-videos-hls.s3-us-west-1.amazonaws.com/India/india.m3u8',
      image:
        'http://photos.roventures.tv/Agra/IMG_4435.jpg',
      latitude: 20.5937,
      longitude: 78.9629,
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
