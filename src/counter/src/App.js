import React, { useState } from 'react';
import './App.css';

function App() {

let [state, setState] = useState(0);

let countUp = () => setState(++state);
let countDown = () => setState(--state);


  return (
    <div className="app">
      {console.log('it is rendering...')}
    <div>
      <div className="count">
        <h3>Count:</h3>
        <h1>{state}</h1>
        {/* <h3>Point:</h3> */}
        {/* <h1>{state.point}</h1> */}
      </div>
      <div className="buttons">
        <button onClick={() => countUp()}>{'+'}</button>
        <button onClick={() => countDown()}>{"-"}</button>
        {/* <button onClick={() => pointDown()}>{"P-"}</button> */}
        {/* <button onClick={() => pointUp()}>{'P+'}</button> */}

      </div>
    </div>
  </div>
  );
}

export default App;
