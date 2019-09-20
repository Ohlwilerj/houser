import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Routes from '../src/routes'

function App() {
  return (

    <div className="App">
      {Routes}
      <Header />
    </div>
  );
}

export default App;
