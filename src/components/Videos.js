import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';
import Swipe from './Swipe';

class Videos extends React.Component {
  data = [
      {
          id: 0,
          text: 'Welcome',
          uri:
              'https://s3-us-west-1.amazonaws.com/rohan-pictures/Dubai/IMG_2018.jpg',
      },

    {
      id: 1,
      text: 'Seychelles',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Seychelles/seychelles-hls-2M.m3u8',
      image:
        'https://s3-us-west-1.amazonaws.com/rohan-pictures/Seychelles/G0530431.jpg',
        latitude: 4.6796,
        longitude: 55.4920,
    },
    {
      id: 2,
      text: 'Dubai',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Dubai/Dubai.m3u8',
      image:
        'https://s3-us-west-1.amazonaws.com/rohan-pictures/Dubai/IMG_2018.jpg',
        latitude: 25.2048,
        longitude: 55.4513,
    }
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
