import React from 'react';
import { connect } from 'react-redux';
import { changeSearch } from './actions';

function ColorSearch({searchTerm, changeSearch}){
    return (
        <form>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={e => changeSearch(e.target.value)} 
            />
        </form>
    )
}

function mapState({searchTerm}){
    return {
        searchTerm
    }
}

export default connect(mapState, {changeSearch})(ColorSearch);