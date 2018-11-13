import React from 'react';
import { connect } from 'react-redux';
import { Tile } from 'react-native-elements';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { fetchAlbum } from '../actions';
// import { styles } from '../stylesheet';

class PhotoViewer extends React.Component {
  componentDidMount() {
    const { fetchAlbum, photoViewerAlbum } = this.props;
    fetchAlbum(photoViewerAlbum);
  }

  renderPhoto({ item }) {
    return (
      <Tile key={item.id} activeOpacity={1} imageSrc={{ uri: item.uri }} featured />
    );
  }

  render() {
    const { photos } = this.props;
    if (!photos.length) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <FlatList
        data={photos}
        renderItem={this.renderPhoto}
        keyExtractor={photo => photo.id.toString()}
      />
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
