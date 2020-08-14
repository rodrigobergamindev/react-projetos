import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";



export default function Navbar(props) {
    const nav = props.menu
    return (
        <Router>
        <Navigation>
            {
               nav.map((element, index) => {
                   return (
                   <Item key={index}><NavLink to={element.url}>{element.name}</NavLink></Item> 
                   )
               }) 
            }
        </Navigation>
        </Router>
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
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.0em;
    font-size: 1.0em;

    @media screen and (max-width: 500px) {
        flex: 1;
        font-size: 1.0em;
        justify-content: space-around;
    }
`;

const Item = styled.li`
    color: #f5f6fa;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    padding: 0.5em;
    text-align:center;
    margin-right: 1.5em;
    border-radius:5px;
    &:hover{
        background: #f5f6fa;
        color:#ee9ca7;
        transition: .5s ease;
        transform: scale(1.2, 1.2);
    }

    @media screen and (max-width: 500px) {
        margin-right:0;
    }
`;