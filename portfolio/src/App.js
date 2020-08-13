import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="container">

    <div className="navbar" id="home">
      <Navbar></Navbar>
        </div>

        <div className="item header">
          <Header></Header>
        </div>

        <div className="item content-portfolio" id="portfolio">
          <div>
            PORTFÓLIO
          </div>
        </div>

        <div className="item servicos" id="servicos">
          SERVIÇOS
        </div>

        <div className="item about" id="sobre">
          SOBRE MIM
        </div>

        <div className="item footer">
          TODOS OS DIREITOS RESERVADOS
        </div>
    </div>
  );
}

export default App;
