import React from 'react';
import ShowMore from './ShowMore/ShowMore'

function App() {
  return (
    <div>
      <ShowMore title="Title1">
        This is my content1
      </ShowMore>
      <ShowMore title="Title2">
        This is my content2
      </ShowMore>
      <ShowMore title="Title3">
        This is my content3
      </ShowMore>
    </div>
  );
}

export default App;
