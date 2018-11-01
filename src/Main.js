import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { styles } from './stylesheet';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Info from './components/Info';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <TopNav />
        {this.props.bottomNavActiveTab === 'videos' && <Videos />}
        {this.props.bottomNavActiveTab === 'photos' && <Photos />}
        {this.props.bottomNavActiveTab === 'info' && <Info />}
        <BottomNav />
      </View>
    );
  }
}

export default connect(state => ({
  bottomNavActiveTab: state.bottomNavActiveTab,
}))(Main);
