import React from 'react';
import styled from 'styled-components'

/**COMPONENTS */
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content'
import Servicos from './components/servicos/Servicos'
import About from './components/about/About'



function App() {
  return (
    <Container>
        <Navbar></Navbar>
        <Header></Header>
        <Content></Content>
        <Servicos></Servicos>
        <About></About>
    </Container>
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
