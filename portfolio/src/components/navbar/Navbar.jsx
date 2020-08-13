import React from 'react'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

export default function Navbar() {
    return (
            <Navigation>
               <Item><a href={"#home"} rel="noopener noreferrer"><FontAwesomeIcon icon={faHome} /></a></Item>
                <Item><a href={"#portfolio"} rel="noopener noreferrer">PORTFOLIO</a></Item>
                <Item><a href={"#servicos"} rel="noopener noreferrer">SERVIÇOS</a></Item>
                <Item><a href={"#sobre"} rel="noopener noreferrer">SOBRE</a></Item>          
            </Navigation>
    )
}

const Navigation = styled.ul`

    margin-bottom: 1.5em;
    grid-area: navbar;
    position: sticky;
    position: -webkit-sticky;
    top: 0; /* required */
    background-color:#ee9ca7;
    z-index: 1;

    margin-top:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media only screen and (min-width: 1025px) {
        justify-content: center;
        font-size: 1.3em;
      }
`;

const Item = styled.li`
    color: #f5f6fa;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0.3em;
    flex:1;
    text-align:center;
    &:hover{
        background-color: #f5f6fa;
        color:#ee9ca7;
        transition: .5s ease;
    }
`;