import React from 'react';
import './App.css';
import Result from './Component/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          List of the most starred repositories on Github
        </h2>
        <div >
            <input className= 'searchinput' placeholder=" Find a repo"></input>
            <button className="searchbutton" value= "SEARCH">SEARCH</button>
            
        </div>
        
      </header>
      <Result/>
    </div>
  );
}

export default App;
