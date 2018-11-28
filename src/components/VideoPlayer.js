import React from 'react';
import { connect } from 'react-redux';
import Expo, { Video } from 'expo';
import { isSmallScreen } from '../utils/isSmallScreen';
import { toggleVideoLoading } from '../actions';

class VideoPlayer extends React.Component {
  changeScreenOrientation(e) {
    if (e.fullscreenUpdate === 1) {
      Expo.ScreenOrientation.allow(
        Expo.ScreenOrientation.Orientation.LANDSCAPE,
      );
    } else {
      Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    }
  }

  toggleVideoLoad(status) {
    const { toggleVideoLoading } = this.props;
    if (status.shouldPlay && status.isLoaded) {
      toggleVideoLoading(true);
    }
  }

  render() {
    const { item, activeIndex, itemIndex } = this.props;
    return (
      <Video
        source={{
          uri: item.uri,
        }}
        rate={1.0}
        volume={1.0}
        // isMuted={true}
        useNativeControls={true}
        resizeMode="contain"
        shouldPlay={activeIndex === itemIndex}
        // isLooping
        // usePoster
        onFullscreenUpdate={status => {
          this.changeScreenOrientation(status);
        }}
        onLoad={e => this.toggleVideoLoad(e)}
        posterSource={{
          uri: item.image,
        }}
        style={{
          width: '100%',
          height: isSmallScreen() ? 180 : 290,
          // borderWidth: 3,
          // borderColor: '#999',
          // borderRadius: 4,
          backgroundColor: '#000',
        }}
      />
    );
  }
}

export default connect(
  state => ({
    bottomNavActiveTab: state.bottomNavActiveTab,
  }),
  { toggleVideoLoading },
)(VideoPlayer);
