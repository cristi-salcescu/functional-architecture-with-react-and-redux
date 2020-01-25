import React from 'react';
import OtherView from './OtherView';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <OtherView />
      <Sidebar>This is the content.</Sidebar>
    </div>
  );
}

export default App;
