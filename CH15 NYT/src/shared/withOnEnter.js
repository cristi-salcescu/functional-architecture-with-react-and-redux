import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { curry } from 'lodash';

function withOnEnter(getActionCreator, Component){
    return connect()(function(props){
        const {dispatch} = props;
        const actionCreator = getActionCreator(props);

        useEffect(() => { 
            dispatch(actionCreator())
        },[dispatch, actionCreator]);

        return <Component {...props} />
    });
}

export default curry(withOnEnter);
