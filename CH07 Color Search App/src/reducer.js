import { handleActions } from "redux-actions";
import * as actions from "./actions";

const intialState = Object.freeze({
    list: [],
    searchTerm: '',
});

//updaters
function setList(state, action){
    return {
        ...state,
        list: action.payload
    }
}

function changeSearch(state, action){
    return {
        ...state,
        searchTerm: action.payload
    }
}

export default handleActions(
    {
      [actions.setList]: setList,
      [actions.changeSearch]: changeSearch
    },
    intialState
);