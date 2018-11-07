import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Swipe from './Swipe';
import { styles } from '../stylesheet';
import { data } from '../thumbnails';
import PhotoViewer from "./PhotoViewer";

class Main extends React.Component {
  render() {
    const {photoViewerAlbum} = this.props;
    return (
      <View style={styles.container}>
          {!photoViewerAlbum && <Swipe type={'photo'} data={data} />}
          {photoViewerAlbum && <PhotoViewer album={photoViewerAlbum} />}
      </View>
    );
  }
}

export default connect(state => ({
    photoViewerAlbum: state.photoViewerAlbum,

}))(Main);
