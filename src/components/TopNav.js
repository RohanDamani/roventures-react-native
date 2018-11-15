import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';
import { updatePhotoViewerAlbum, clearAlbumData } from '../actions';
import { Image, View } from 'react-native';

class TopNav extends React.Component {
  render() {
    const {
      photoViewerAlbum,
      updatePhotoViewerAlbum,
      clearAlbumData,
      bottomNavActiveTab,
    } = this.props;
    return (
      <Header
        centerComponent={
          <Image
            source={require('../roventures_logo_mobile.png')}
            style={{ width: 220, height: 35 }}
          />
        }
        leftComponent={
          photoViewerAlbum && bottomNavActiveTab === 'photos' ? (
            <Icon
              name="ios-arrow-back"
              color="aqua"
              type="ionicon"
              size={35}
              containerStyle={{ marginTop: 28, width: 28 }}
              onPress={() => {
                updatePhotoViewerAlbum('');
                clearAlbumData();
              }}
            />
          ) : null
        }
        outerContainerStyles={{
          height: 90,
          backgroundColor: '#333',
          borderBottomColor: '#777',
          paddingBottom: 7,
        }}
      />
    );
  }
}

export default connect(
  state => ({
    photoViewerAlbum: state.photoViewerAlbum,
    bottomNavActiveTab: state.bottomNavActiveTab,
  }),
  { updatePhotoViewerAlbum, clearAlbumData },
)(TopNav);
