import React from 'react';
import { connect } from 'react-redux';
import { partial } from 'lodash';

import { addToast } from './toasts/operations';

function AddToast({ addToast }){
    return (
        <div>       
            <button 
            type="button" 
            onClick={partial(addToast, "A new toast message")}>
                ADD TOAST
            </button>
        </div>
    )
}
    
export default connect(
    null,
    { addToast }
)(AddToast)