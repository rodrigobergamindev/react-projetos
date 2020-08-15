import React from 'react'
import styled from 'styled-components'
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function About() {
    return (
        <SecAbout id="sobre">
          <Title><FontAwesomeIcon icon={faIdCard} /> Sobre</Title>
          </SecAbout>
    )
}

const SecAbout = styled.div`
  padding: 2em;
  flex:1;
  height:35em;
  background-color:#f5f6fa;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.div`
color: #f8a5c2;
font-size: 2em;
text-align:center;
font-family: 'Open Sans', sans-serif;
font-weight: 700;

`

const TabCard = styled.div`
  width:40em;
  height:30em;
  background-color:transparent;
  margin:2em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display:flex;
  flex-direction: column;
`