import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from './actions';
import './Sidebar.css';

function SidebarOpened({toggleSidebar, children}){
    return (
        <div className="side-bar-opened">
            <button onClick={toggleSidebar}>&lt;</button>
            <div>
                {children}
            </div>
        </div>
    )
}

function SidebarClosed({toggleSidebar}){
    return (
        <div className="side-bar-closed">
            <button onClick={toggleSidebar}>&gt;</button>
        </div>
    )
}

function Sidebar({ show, children, toggleSidebar }){
    return(
        <div className="side-bar">
        {  show ? (
                <SidebarOpened 
                    toggleSidebar={toggleSidebar} 
                    children={children} 
                />
            ) : (
                <SidebarClosed 
                    toggleSidebar={toggleSidebar} 
                /> 
        )}
        </div>
    )
}

function mapState(show){
    return {
        show
    };
}
    
export default connect(
    mapState,
    { toggleSidebar }
)(Sidebar);