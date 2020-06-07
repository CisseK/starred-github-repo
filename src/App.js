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
        
      </header>
      <Result/>
    </div>
  );
}

export default App;
