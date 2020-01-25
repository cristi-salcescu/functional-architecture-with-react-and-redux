import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from './actions';

function OtherView({ toggleSidebar }){
    return(
        <div>
            <button 
                type="button" 
                onClick={toggleSidebar}>
                    Toggle
            </button>
        </div>
    )
}
    
export default connect(
    null,
    { toggleSidebar }
)(OtherView);