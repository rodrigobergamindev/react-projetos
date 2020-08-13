import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

export default function Navbar() {
    return (
        <Secnavbar>
            <Navigation>
               <Item><a href={"#home"} rel="noopener noreferrer"><FontAwesomeIcon icon={faHome} /></a></Item>
                <Item><a href={"#portfolio"} rel="noopener noreferrer">PORTFOLIO</a></Item>
                <Item><a href={"#servicos"} rel="noopener noreferrer">SERVIÇOS</a></Item>
                <Item><a href={"#sobre"} rel="noopener noreferrer">SOBRE</a></Item>          
            </Navigation>
        </Secnavbar>
    )
}


const Secnavbar = styled.div`
  grid-area: navbar;
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
  background-color:#ee9ca7;
  z-index: 1;
`;

const Navigation = styled.ul`
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (min-width: 1025px) {
        justify-content: center;
        font-size: 1.2em;
      }
`;

const Item = styled.li`
    color: #f5f6fa;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0.3em;
    border-radius: 0.6em;
    margin-right: 1.0em;
    &:hover{
        background-color: #f5f6fa;
        color:#ee9ca7;
        transition: .5s ease;
    }
`;