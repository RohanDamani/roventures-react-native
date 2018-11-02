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
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Welcome/welcome.m3u8',
    },

    {
      id: 1,
      text: 'Seychelles',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Seychelles/seychelles-hls-2M.m3u8',
      image: '"http://d1qnv9b0izl3m2.cloudfront.net/Seychelles/G0530431.jpg"',
      latitude: 4.6796,
      longitude: 55.492,
    },
    {
      id: 2,
      text: 'Dubai',
      uri:
        'https://s3-us-west-1.amazonaws.com/roventures-videos-hls/Dubai/Dubai.m3u8',
      image: 'http://d1qnv9b0izl3m2.cloudfront.net/Dubai/IMG_2009.jpg',
      latitude: 25.2048,
      longitude: 55.4513,
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
