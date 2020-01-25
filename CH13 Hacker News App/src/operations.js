import api from "./api";
import * as actions from './actions';
import { getTopStoriesNumber } from './selectors';

const maxNoOfNewStories = 10;

function fetchDetailsForStories(ids){
    const promises = ids.map(api.fetchStory);
    return Promise.all(promises);
}

function showMoreStories(){
    return function(dispatch, getState){
        const state = getState();
        const { storiesIds } = state;

        const from = getTopStoriesNumber(state);
        const to = from + maxNoOfNewStories;
        const newIds = storiesIds.slice(from, to);

        fetchDetailsForStories(newIds)
           .then(actions.addTopStories)
           .then(dispatch);
    }
}

function fetchTopStories(){
    return function(dispatch){
        api.fetchTopStoriesIds()
        .then(actions.setStoriesIds)
        .then(dispatch)
        .then(showMoreStories)
        .then(dispatch)
    }
}

export { fetchTopStories, showMoreStories };