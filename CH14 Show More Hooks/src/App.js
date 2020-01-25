import React from 'react';
import ShowMore from './ShowMore'

function App() {
  return (
    <div>
      <ShowMore title="Title1" name="r1" >
        This is my content 1
      </ShowMore>
      <ShowMore title="Title2" name="r2">
        This is my content 2
      </ShowMore>
      <ShowMore title="Title3" name="r3">
        This is my content 3
      </ShowMore>
    </div>
  );
}

export default App;
