import React from 'react';
import { partial } from 'lodash';
import { connect } from 'react-redux';
import { deleteToast } from './actions';

function ToastItem({toast, deleteToast}){
    return (
        <div className="toast-item">
            <div>{toast.message}</div>
            <div>
                <button 
                type="button" 
                className="toast-item-delete" 
                onClick={partial(deleteToast, toast)}>
                    X
                </button>
            </div>
        </div>
    )
}

export default connect(
    null,
    { deleteToast }
)(ToastItem);