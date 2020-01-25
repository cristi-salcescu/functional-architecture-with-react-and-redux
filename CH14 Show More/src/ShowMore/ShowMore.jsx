import React from 'react';
import { toggleShowMore } from './actions';
import { connect } from 'react-redux';

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

function mapState({ showMore }) {
    return {
        showMore
    }
}

export default connect(
        mapState,
        { toggleShowMore }
    )(ShowMore);