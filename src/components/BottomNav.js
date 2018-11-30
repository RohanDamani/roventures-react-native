import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { updateBottomNavActiveTab } from '../actions/index';
import { resizeVertical } from '../utils/resize';

class BottomNav extends Component {
  tabs = [
    {
      key: 'videos',
      icon: 'video-camera',
      label: 'Videos',
      barColor: '#333',
      pressColor: 'rgba(0, 0, 0, 0.16)',
      labelColor: '#fff',
    },
    {
      key: 'photos',
      icon: 'camera',
      label: 'Photos',
      barColor: '#999',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      labelColor: '#fff',
    },
    {
      key: 'info',
      icon: 'anchor',
      label: 'Info',
      barColor: 'lightblue',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      labelColor: '#000',
    },
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon name={icon} type="font-awesome" color="#517fa4" />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      // labelStyle={{
      //   color: isActive ? tab.labelColor : '#fff',
      // }}
    />
  );

  render() {
    return (
      <BottomNavigation
        activeTab={this.props.bottomNavActiveTab}
        onTabPress={newTab => this.props.updateBottomNavActiveTab(newTab.key)}
        renderTab={this.renderTab}
        tabs={this.tabs}
        style={{
          height: resizeVertical(60, 67, 78, 85, 80),
          paddingBottom: resizeVertical(5, 4, 18, 22, 15),
        }}
        useLayoutAnimation={true}
      />
    );
  }
}

export default connect(
  state => ({
    bottomNavActiveTab: state.bottomNavActiveTab,
    form: state.form,
  }),
  { updateBottomNavActiveTab },
)(BottomNav);
