import React from 'react';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';
// import { styles } from '../stylesheet';

class PhotoCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
        imageProps={{ resizeMode: 'contain' }}
        imageStyle={{ height: 330, backgroundColor: '#000' }}
        containerStyle={{ height: 450 }}
      >
        <Text>{item.id}</Text>
      </Card>
    );
  }
}

export default PhotoCard;
