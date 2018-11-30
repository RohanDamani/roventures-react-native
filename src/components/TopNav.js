import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';
import { updatePhotoViewerAlbum, clearAlbumData } from '../actions';
import { Image } from 'react-native';
import { resizeVertical } from '../utils/resize';

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
              containerStyle={{
                marginTop: resizeVertical(9, 12, 22, 27, 20, 16),
                width: 28,
              }}
              onPress={() => {
                updatePhotoViewerAlbum('');
                clearAlbumData();
              }}
            />
          ) : null
        }
        outerContainerStyles={{
          height: resizeVertical(68, 70, 80, 88, 80),
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
