import React from 'react';
import { connect } from 'react-redux';
import { changeSearch, submitSearch } from './actions';
import thunkify from 'thunkify';

function ColorSearch({searchTerm, changeSearch, submitSearch}){
    return (
        <form>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={e => changeSearch(e.target.value)} 
            />
            <button
                type="button"
                onClick={thunkify(submitSearch)(searchTerm)}>
                Search
            </button>
        </form>
    )
}

function mapState({searchTermInput}){
    return {
        searchTerm: searchTermInput
    }
}

export default connect(mapState, {changeSearch, submitSearch})(ColorSearch);