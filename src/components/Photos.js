import React from 'react';
import { connect } from 'react-redux';
import {  View } from 'react-native';
import Swipe from './Swipe';
import { styles } from '../stylesheet';

class Main extends React.Component {

    data = [
        {
            id: 1,
            text: 'Agra',
            uri:
                'https://s3-us-west-1.amazonaws.com/rohan-pictures/Agra/IMG_4383.jpg',
        },
        {
            id: 2,
            text: 'Amritsar',
            uri:
                'https://s3-us-west-1.amazonaws.com/rohan-pictures/Amritsar/IMG_4814.jpg',
        },
        {
            id: 3,
            text: 'Bhutan',
            uri:
                'https://s3-us-west-1.amazonaws.com/rohan-pictures/Bhutan/IMG_5797.jpg',
        },
        {
            id: 4,
            text: 'Jaipur',
            uri:
                'https://s3-us-west-1.amazonaws.com/rohan-pictures/Jaipur/IMG_3151.jpg',
        },
    ];

    render() {
    return (
      <View style={styles.container}>
        <Swipe type={'photo'} data={this.data}/>
          {/*<Button>View Full List</Button>*/}
      </View>
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(Main);
