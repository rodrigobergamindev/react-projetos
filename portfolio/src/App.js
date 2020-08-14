import React from 'react';
import styled from 'styled-components'

/**COMPONENTS */
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content'
import Servicos from './components/servicos/Servicos'
import About from './components/about/About'


import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Switch,
  Route,
} from "react-router-dom";



const home = <FontAwesomeIcon icon={faHome} />

function App() {

  const menu = [
    {name:home, url:"/"},
    {name:"PORTFOLIO", url:"/portfolio"},
    {name:"SERVIÇOS", url:"/servicos"},
    {name:"SOBRE", url:"/sobre"},
  ]


  return (
      <Switch>
      <Container>
              <Navbar menu={menu}></Navbar>
              <Header></Header>
                <Route exact path='/portfolio' component={Content}></Route>
                <Route exact path='/servicos' component={Servicos}></Route>
                <Route exact path='/sobre' component={About}></Route>
      </Container>
      </Switch>

  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
  "navbar"
  "header"
  "content"
  "servicos"
  "about"
  "footer"
  ;
`;



export default App;
