import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
 
function Counter({counter, increment, decrement}){
    return(
        <div>
            <div>{counter}</div>
            <div>
                <button type="button" onClick={decrement}>-</button>
                <button type="button" onClick={increment}>+</button>
            </div>
        </div>
    )
}

function mapState(counter){
    return {
        counter
    }
}
    
export default connect(
    mapState,
    { increment, decrement }
)(Counter)