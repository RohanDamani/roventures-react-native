import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

const bottomNavActiveTab = (state = 'videos', action) => {
    switch (action.type) {
        case 'UPDATE_BOTTOM_NAV_ACTIVE_TAB':
            return action.activeTab;
        default:
            return state;
    }
};

export default combineReducers({
    bottomNavActiveTab,
    form: formReducer,

})
