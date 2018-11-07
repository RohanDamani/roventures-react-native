import React, { Component } from 'react';
import { View, Animated, PanResponder, Text } from 'react-native';
import { styles, SCREEN_WIDTH } from '../stylesheet';
import { Card, Icon } from 'react-native-elements';
import VideoPlayer from './VideoPlayer';
import { MapView } from 'expo';
import VideoCard from './VideoCard';
import PhotoCard from './PhotoCard';

const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Swipe extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        this.setNextCard(gesture.dx);
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = { panResponder, position, index: 0, nextCard: 1 };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.index < 0) {
      this.setState({ index: this.props.data.length - 1 });
    }
    if (nextState.index === this.props.data.length) {
      this.setState({ index: 0 });
    }
  }

  setNextCard(x) {
    const { index, nextCard } = this.state;
    if (x >= 0) {
      if (nextCard !== index + 1) {
        const next = this.state.index + 1;
        this.setState({ nextCard: next === this.props.data.length ? 0 : next });
      }
    } else {
      if (nextCard !== index - 1) {
        const prev = this.state.index - 1;

        this.setState({
          nextCard: prev === -1 ? this.props.data.length - 1 : prev,
        });
      }
    }
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x: x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeRight, onSwipeLeft, data } = this.props;
    const item = data[this.state.index];
    this.state.position.setValue({ x: 0, y: 0 });
    direction === 'right'
      ? this.setState({ index: this.state.index + 1 })
      : this.setState({ index: this.state.index - 1 });
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['20deg', '0deg', '-20deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }

  render() {
    return this.props.data
      .map((item, i) => {
        if (i === this.state.index) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardPosition, { zIndex: 99 }]}
              {...this.state.panResponder.panHandlers}
            >
              {this.props.type === 'video' && <VideoCard item={item} i={i} />}
              {this.props.type === 'photo' && <PhotoCard item={item} />}
            </Animated.View>
          );
        }
        if (i === this.state.nextCard) {
          return (
            <Animated.View key={item.id} style={styles.nextCardPosition}>
              {this.props.type === 'video' && <VideoCard item={item} i={i} />}
              {this.props.type === 'photo' && <PhotoCard item={item} />}
            </Animated.View>
          );
        }
        return null;
      })
      .reverse();
  }
}

export default Swipe;
