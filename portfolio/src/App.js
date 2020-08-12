import React from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
        <div className="item header" id="home">
          <Header></Header>
        </div>

        <div className="item content-portfolio" id="portoflio">
          PORTFÓLIO
        </div>

        <div className="item about" id="sobre">
          SOBRE MIM
        </div>

        <div className="item contato" id="contato">
          CONTATO
        </div>

        <div className="item footer">
          TODOS OS DIREITOS RESERVADOS
        </div>
    </div>
  );
}

export default App;
