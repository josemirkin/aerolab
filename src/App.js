import React from 'react'

import Header from './components/Header/Header'
import ActionBar from './components/ActionBar/ActionBar'
import CardsGroup from './components/CardsGroup/CardsGroup'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ActionBar />
        <CardsGroup />
      </div>
    </div>
  );
}

export default App;
