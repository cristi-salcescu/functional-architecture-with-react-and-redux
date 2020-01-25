import { createAction } from 'redux-actions';

const setStoriesIds = createAction('SET_STORIES_IDS');
const addTopStories = createAction('ADD_TOP_STORIES');

export {
    setStoriesIds,
    addTopStories
};
