import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Icon } from 'react-native-elements';
import { updatePhotoViewerAlbum } from '../actions';
import { View } from 'react-native';
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
        containerStyle={{
          height: 605,
          padding: 0,
          shadowColor: '#333',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          borderWidth: 0,
        }}
        titleStyle={{
          fontSize: 30,
          marginTop: 25,
          marginBottom: 20,
          textAlign: 'left',
          paddingLeft: 14,
          fontFamily: 'Georgia',
        }}
      >
        <Button
          title="View Album"
          onPress={() => updatePhotoViewerAlbum(item.text)}
          containerViewStyle={{ marginLeft: 0, marginRight: 0, marginTop: 12 }}
        />
        <View
          style={{
            width: '100%',
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 25,
              padding: 8,
              marginLeft: 10,
            }}
          >
            <Icon name="hand-o-left" type="font-awesome" />
          </View>
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 25,
              padding: 8,
              marginRight: 10,
            }}
          >
            <Icon name="hand-o-right" type="font-awesome" />
          </View>
        </View>
      </Card>
    );
  }
}

export default connect(
  state => ({
    photoViewerAlbum: state.photoViewerAlbum,
  }),
  { updatePhotoViewerAlbum },
)(PhotoCard);
