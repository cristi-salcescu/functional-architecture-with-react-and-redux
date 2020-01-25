import React from 'react';
import { toggleShowMore } from './actions';
import { connect } from 'react-redux';
import { nameAction, nameActions } from '../helpers';

function ShowMore({showMore, toggleShowMore, title, children}){
    return (
        <div>
            <h2>{ title }</h2>
            <div><button onClick={toggleShowMore} type="button">ShowMore</button></div>
            <div>
                { showMore ? children : "" }
            </div>
        </div>
    )
}

function mapState({ showMore }, {name}) {
    return {
        showMore: showMore[name]
    }
}

function mapDispatch(dispatch, {name}){
    return {
        toggleShowMore(){
            const createAction = nameAction(toggleShowMore, name);
            dispatch(createAction())
        }
    }
}

export default connect(
        mapState,
        nameActions({toggleShowMore})
    )(ShowMore);