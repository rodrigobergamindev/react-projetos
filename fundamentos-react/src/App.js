import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Aleatorio from './components/Aleatorio';
import css from './app.module.css'
import Familia from './components/Familia';
import FamiliaMembro from './components/FamiliaMembro';
import ListaDeAlunos from './components/ListaDeAlunos';


function App() {

  return (
    <div className={css.app}>
      <h1>React Fundamentos</h1>
      <div className={css.cards}>
      <Card titulo="#1 - Componente de Números Aleatórios" color={'#34495E'}>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
      </Card>

      <Card titulo="#2 - Componente de Números Aleatórios" color={'#E9967A'}>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
        <Aleatorio min={10} max={100}/>
      </Card>

      <Card titulo="#3 - Componente children" color={"#fdcb6e"}>
        <Familia sobrenome={"Lancaster"}>
            <FamiliaMembro nome="Rodrigo"></FamiliaMembro> 
            <FamiliaMembro nome="Rafaella"></FamiliaMembro> 
            <FamiliaMembro nome="Kaline"></FamiliaMembro> 
        </Familia>
      </Card>

      <Card titulo="#4 - Lista de Alunos" color={"#ff6b81"}>
          <ListaDeAlunos></ListaDeAlunos>
      </Card>
    </div>
    </div>
  );
}
/**EXERCÍCIO - CRIAR UMA TABELA DE PRODUTOS, CONTENDO ID, PREÇO E NOME */

export default App;
