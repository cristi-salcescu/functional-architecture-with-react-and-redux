import React from 'react';
import { connect } from 'react-redux';
import { changeSearch, submitSearch } from './actions';
import { withValue } from './helpers';

function ColorSearch({searchTerm, changeSearch, submitSearch}){
    return (
        <form>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={withValue(changeSearch)} 
            />
            <button
                type="button"
                onClick={() => submitSearch(searchTerm)}>
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