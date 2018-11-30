import React from 'react';
import { connect } from 'react-redux';
import Expo, { Video } from 'expo';
import { resizeVertical } from '../utils/resize';
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
        onLoad={e => this.toggleVideoLoad(e)}
        onFullscreenUpdate={status => {
          this.changeScreenOrientation(status);
        }}
        style={{
          width: '100%',
          height: resizeVertical(180, 225, 290, 310, 460, 620),
          backgroundColor: '#000',
        }}
        // isLooping
        // usePoster
        // posterSource={{
        //   uri: item.image,
        // }}
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
