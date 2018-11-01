import { Dimensions, StyleSheet } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cardPosition: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    zIndex: 2,
  },
  nextCardPosition: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    zIndex: 1,
  },
});
