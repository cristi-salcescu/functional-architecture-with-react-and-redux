import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './reducer';
 
function Counter({counter, onDecrement, onIncrement}){
    return(
        <div>
            <div>{counter}</div>
            <div>
                <button 
                    type="button" 
                    onClick={onDecrement}>-</button>
                <button 
                    type="button" 
                    onClick={onIncrement}>+</button>
            </div>
        </div>
    )
}

function mapStateToProps(counter){
    return {
        counter
    }
}
  
function mapDispatchToProps(dispatch){
    return {
        onDecrement(){
            dispatch({ type: DECREMENT });
        },
        onIncrement(){
            dispatch({ type: INCREMENT });
        }
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)