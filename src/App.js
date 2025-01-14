import React from 'react';
import './App.css';
import BeerList from './Components/BeerList.jsx'
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    <BeerList></BeerList>
    </div>
  );
}

export default App;
