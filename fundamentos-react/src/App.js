import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Aleatorio from './components/Aleatorio';
import css from './app.module.css'
import Familia from './components/Familia';
import FamiliaMembro from './components/FamiliaMembro';
import ListaDeAlunos from './components/ListaDeAlunos';
import ListaDeProdutos from './components/ListaDeProdutos';
import ParOuImpar from './components/ParOuImpar';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';


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

      <Card titulo="#5 - Lista de Produtos" color={"#C39BD3"}>
        <ListaDeProdutos></ListaDeProdutos>
      </Card>

      <Card titulo="#6 - Renderização Condicional" color={"#ffa502"}>
        <ParOuImpar numero={2}></ParOuImpar>
      </Card>

      <Card titulo="#7 - Comunicação Direta" color={"#ffa502"}>
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#8 - Comunicação Indireta" color={"#ffa502"}>
        <IndiretaPai></IndiretaPai>
      </Card>
    </div>
    </div>
  );
}


export default App;
