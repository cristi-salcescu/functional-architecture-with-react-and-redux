import React from 'react';
import { connect } from 'react-redux';
import { partial } from 'lodash';
import './ToastList.css';
import { deleteToast } from './actions';

function ToastListItem({toast, deleteToast}){
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

function ToastList({toasts, deleteToast}){
    return (
        <div className="toast">
            { toasts.map(toast =>
                <ToastListItem key={toast.id} toast={toast} deleteToast={deleteToast} /> 
            )}
        </div>
    )
}

function mapState(state){
    const { toasts } = state;
    return {
        toasts
    }
}
    
export default connect(
    mapState,
    { deleteToast }
)(ToastList)