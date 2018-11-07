import { authenticatePhotoBucket } from '../awsUtil';

const bucket = authenticatePhotoBucket

export const updateBottomNavActiveTab = activeTab => ({
  type: 'UPDATE_BOTTOM_NAV_ACTIVE_TAB',
  activeTab,
});

export const updatePhotoViewerAlbum = album => ({
  type: 'UPDATE_PHOTO_VIEWER_ALBUM',
  album,
});

export const clearAlbumData = () => ({
    type: 'CLEAR_ALBUM_DATA',
});

const receiveAlbumData = data => ({
  type: 'RECEIVE_ALBUM_DATA',
  payload: data,
});

export const fetchAlbum = (album) => {
  return dispatch => {
    // AWS-sdk for s3 object
    bucket.listObjects({ Prefix: album }, (err, data) => {
      if (err) {
        return alert('There was an error viewing your album: ' + err.message);
      }
      dispatch(receiveAlbumData(data));
    });
  };
};
