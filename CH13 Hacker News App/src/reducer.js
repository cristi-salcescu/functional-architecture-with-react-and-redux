import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = Object.freeze({
    storiesIds: [],
    topStories: []
});

//updaters
function setStoriesIds(state, action){
    const storiesIds = action.payload;
    return {
        ...state,
        storiesIds
    }
}

function addTopStories(state, action){
    const newStories = action.payload;
    const topStories = state.topStories.concat(newStories);
    return {
        ...state,
        topStories
    }; 
}

export default handleActions(
    {
      [actions.setStoriesIds]: setStoriesIds,
      [actions.addTopStories]: addTopStories  
    },
    initialState
);