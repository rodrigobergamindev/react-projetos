import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Aleatorio from './components/Aleatorio';
import css from './app.module.css'

function App() {

  return (
    <div className={css.app}>
      <h1>React Fundamentos</h1>
      <div className={css.cards}>
      <Card titulo="Número Aleatório" color={'#34495E'}>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
      </Card>

      <Card titulo="Número Aleatório" color={'#E9967A'}>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
      </Card>
    </div>
    </div>
  );
}

export default App;
