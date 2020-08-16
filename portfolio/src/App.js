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
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const home = <FontAwesomeIcon icon={faHome} />

function App() {

  const menu = [
    {name:home, url:"home"},
    {name:"PORTFOLIO", url:"portfolio"},
    {name:"SERVIÇOS", url:"servicos"},
    {name:"SOBRE", url:"sobre"},
  ]


  return (
      <Container>
              <Navbar menu={menu}></Navbar>
              <Header></Header>
               <Content/>
               <Servicos/>
               <About/>
               <Footer/>
      </Container>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  ;
`;



export default App;
