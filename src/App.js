import React from 'react'
import './App.css';
import Wrapper from './components/Wrapper'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Table />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
