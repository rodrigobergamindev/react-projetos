import React from 'react';
import styled from 'styled-components'

/**COMPONENTS */
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content'
import Servicos from './components/servicos/Servicos'
import About from './components/about/About'
import Footer from './components/footer/Footer'

/*ICONS*/
import { faHome, faSuitcase, faPaintBrush, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
ROUTER
*/
import {
  Switch,
  Route
} from "react-router-dom";


const home = <FontAwesomeIcon icon={faHome} />
const portfolio = <FontAwesomeIcon icon={faSuitcase} />
const servicos = <FontAwesomeIcon icon={faPaintBrush} />
const sobre = <FontAwesomeIcon icon={faIdCard} />


function App() {

  const menu = [
    {icon:home, url:"home"},
    {icon:portfolio, url:"portfolio"},
    {icon:servicos, url:"servicos"},
    {icon:sobre, url:"sobre"},
  ]


  return (
    <Switch>
      <Container>
      <Navbar menu={menu}></Navbar>
              <Route path="/home">
                <Header>
                   {/**Passar params */}
                </Header>
                </Route>

                <Route path="/portfolio">
                    <Content>
                        {/**Passar params */}
                    </Content>
                </Route>
  
                <Route path="/servicos">
                    <Servicos>
                        {/**Passar params */}
                    </Servicos>
                </Route>

                <Route path="/sobre">
                    <About>
                        {/**Passar params */}
                    </About>
                </Route>
                <Footer/>
      </Container>
      </Switch>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`;



export default App;
