import React from 'react';
import { connect } from 'react-redux';
import './ToastList.css';
import ToastItem from './ToastItem';

function ToastList({toasts, deleteToast}){
    return (
        <div className="toast">
            { toasts.map(toast =>
                <ToastItem key={toast.id} toast={toast} /> 
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
    
export default connect(mapState)(ToastList);