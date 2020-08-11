import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
        <div className="item header">
          <Header></Header>
        </div>

        <div className="item content-portfolio">
          PORTFÓLIO
        </div>

        <div className="item about">
          SOBRE MIM
        </div>

        <div className="item contato">
          CONTATO
        </div>

        <div className="item footer">
          TODOS OS DIREITOS RESERVADOS
        </div>
    </div>
  );
}

export default App;
