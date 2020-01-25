import React from 'react';
import { connect } from 'react-redux';
import { isLoading } from './selectors';

function FetchStatus({ error, isLoading }){
    return (
        <div>
            <div>
                {isLoading && 'Loading ...'}
            </div>
            <div>
                {error}
            </div>
        </div>
    )
}

function maspState(state){
    return {
        error: state.fetch.error,
        isLoading: isLoading(state)
    }
}
  
export default connect(
    maspState
)(FetchStatus)