import React from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-native-elements';
import{ updatePhotoViewerAlbum} from '../actions'
// import { styles } from '../stylesheet';

class PhotoCard extends React.Component {
  render() {
    const { item, updatePhotoViewerAlbum } = this.props;
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
        imageProps={{ resizeMode: 'contain' }}
        imageStyle={{
          height: 330,
          backgroundColor: '#000',
        }}
        containerStyle={{ height: 450, paddingBottom: 20 }}
      >
        <Button
          title="View Album"
          onPress={() => updatePhotoViewerAlbum(item.text)}
        />
      </Card>
    );
  }
}

export default connect(state => ({
    photoViewerAlbum: state.photoViewerAlbum,
}), {updatePhotoViewerAlbum})(PhotoCard);
