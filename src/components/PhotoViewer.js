import React from 'react';
import { connect } from 'react-redux';
import { Tile } from 'react-native-elements';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { fetchAlbum } from '../actions';
// import { styles } from '../stylesheet';

class PhotoViewer extends React.Component {
  componentDidMount() {
    const { fetchAlbum, photoViewerAlbum } = this.props;
    fetchAlbum(photoViewerAlbum);
  }
  render() {
    const { photos } = this.props;
    return (
      <ScrollView>
        {!photos.length && (
          <View style={{ flex: 1, justifyContent: 'center', marginTop: 120 }}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {photos &&
          photos.map(photo => {
            return (
              <Tile
                key={photo}
                imageSrc={{ uri: photo }}
              />
            );
          })}
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    photos: state.media.photos,
    photoViewerAlbum: state.photoViewerAlbum,
  }),
  { fetchAlbum },
)(PhotoViewer);
