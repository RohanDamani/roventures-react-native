import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Icon } from 'react-native-elements';
import { updatePhotoViewerAlbum } from '../actions';
import { View } from 'react-native';
import { resizeVertical, resize } from '../utils/resize';

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
          height: resizeVertical(290, 345, 345, 384, 530, 800),
          backgroundColor: '#000',
        }}
        containerStyle={{
          height: resizeVertical(400, 486, 605, 687, 830, 1150),
          padding: 0,
          shadowColor: '#333',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          borderWidth: 0,
        }}
        titleStyle={
          resize()
            ? { display: 'none' }
            : {
                fontSize: resizeVertical(30, 30, 30, 32, 36, 42),
                marginTop: 25,
                marginBottom: 20,
                textAlign: 'left',
                paddingLeft: 14,
                fontFamily: 'Georgia',
              }
        }
      >
        <Button
          title={resize() ? `VIEW ${item.text}` : 'VIEW ALBUM'}
          onPress={() => updatePhotoViewerAlbum(item.text)}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: resizeVertical(4, 8, 10, 40, 30, 45),
          }}
          textStyle={{ fontSize: 18 }}
        />
        <View
          style={{
            width: '100%',
            marginTop: resizeVertical(14, 22, 25, 60, 40, 70),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 25,
              padding: resizeVertical(4, 8, 8, 12, 12),
              paddingRight: resizeVertical(6, 11, 11, 15, 15),
              marginLeft: 10,
            }}
          >
            <Icon
              name="chevron-left"
              type="font-awesome"
              color="#777"
              size={resizeVertical(17, 18, 18, 22, 18)}
            />
          </View>
          <View
            style={{
              backgroundColor: '#eee',
              borderRadius: 25,
              padding: resizeVertical(4, 8, 8, 12, 12),
              paddingLeft: resizeVertical(6, 11, 11, 15, 15),

              marginRight: 10,
            }}
          >
            <Icon
              name="chevron-right"
              type="font-awesome"
              color="#777"
              size={resizeVertical(17, 18, 18, 22, 18)}
            />
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
