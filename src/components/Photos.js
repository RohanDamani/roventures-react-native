import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Swipe from './Swipe';
import { styles } from '../stylesheet';
import { data } from '../thumbnails';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swipe type={'photo'} data={data} />
        {/*<Button>View Full List</Button>*/}
      </View>
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(Main);
