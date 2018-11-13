import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { getBucketUrl } from '../awsUtil';

const bottomNavActiveTab = (state = 'videos', action) => {
  switch (action.type) {
    case 'UPDATE_BOTTOM_NAV_ACTIVE_TAB':
      return action.activeTab;
    default:
      return state;
  }
};

const photoViewerAlbum = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO_VIEWER_ALBUM':
      return action.album;
    default:
      return state;
  }
};

const media = (state = { photos: [], videos: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_ALBUM_DATA':
      const bucketUrl = getBucketUrl;
      const photos = [];
      action.payload.Contents.forEach((photo, index) => {
        if (photo.Size > 0) {
          const photoKey = photo.Key;
          photos.push({id: index, uri: `${bucketUrl}${photoKey}`});
        }
      });
      return {
        ...state,
        photos: photos,
      };
    case 'CLEAR_ALBUM_DATA':
      return {
        ...state,
        photos: [],
      };
    default:
      return state;
  }
};

export default combineReducers({
  bottomNavActiveTab,
  photoViewerAlbum,
  media,
  form: formReducer,
});
