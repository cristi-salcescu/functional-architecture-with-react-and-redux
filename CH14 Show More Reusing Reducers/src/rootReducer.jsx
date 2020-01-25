import { combineReducers } from 'redux';
import showMoreReducer from './ShowMore/reducer';
import { nameReducer } from './helpers';

export default combineReducers({
    showMore: combineReducers({
        show1: nameReducer(showMoreReducer, 'show1'),
        show2: nameReducer(showMoreReducer, 'show2'),
        show3: nameReducer(showMoreReducer, 'show3')
    })
});

