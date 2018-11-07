import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';
import { updatePhotoViewerAlbum, clearAlbumData } from '../actions';

class TopNav extends React.Component {
  render() {
    const {
      photoViewerAlbum,
      updatePhotoViewerAlbum,
      clearAlbumData,
    } = this.props;
    if (photoViewerAlbum) {
      return (
        <Header
          centerComponent={{
            text: photoViewerAlbum,
            style: { color: 'aqua', fontSize: 24 },
          }}
          leftComponent={
            <Icon
              name="ios-arrow-back"
              color="aqua"
              type="ionicon"
              size={35}
              containerStyle={{ marginTop: 28 }}
              onPress={() => {
                updatePhotoViewerAlbum('');
                clearAlbumData;
              }}
            />
          }
          outerContainerStyles={{
            height: 90,
            backgroundColor: '#333',
            borderBottomColor: '#777',
          }}
        />
      );
    }
    return (
      <Header
        centerComponent={{
          text: 'RoVentures',
          style: { color: 'aqua', fontSize: 24 },
        }}
        outerContainerStyles={{
          height: 90,
          backgroundColor: '#333',
          borderBottomColor: '#777',
        }}
      />
    );
  }
}

export default connect(
  state => ({
    photoViewerAlbum: state.photoViewerAlbum,
  }),
  { updatePhotoViewerAlbum, clearAlbumData },
)(TopNav);
