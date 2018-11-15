import React from 'react';
import { connect } from 'react-redux';
import Expo, { Video } from 'expo';

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

  render() {
    const { item, activeIndex, itemIndex } = this.props;
    return (
      <Video
        source={{
          uri: item.uri,
        }}
        rate={1.0}
        volume={1.0}
        // isMuted={false}
        useNativeControls={true}
        resizeMode="contain"
        shouldPlay={activeIndex === itemIndex}
        // isLooping
        // usePoster
        onFullscreenUpdate={e => {
          this.changeScreenOrientation(e);
        }}
        posterSource={{
          uri: item.image,
        }}
        style={{
          width: '100%',
          height: 290,
          // borderWidth: 3,
          // borderColor: '#999',
          // borderRadius: 4,
          backgroundColor: '#000',
        }}
      />
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(VideoPlayer);
