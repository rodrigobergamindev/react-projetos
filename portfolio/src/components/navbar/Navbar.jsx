import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";


export default function Navbar(props) {
    const nav = props.menu
    return (
        <Container>
        <Navigation>

            {
               nav.map((element, index) => {
                   return (
                   <Item key={index}>
                        <NavLink to={element.url}>
                           {element.icon}
                        </NavLink>
                       </Item> 
                   )
               }) 
            }
        </Navigation>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    position: sticky;
    position: -webkit-sticky;
    top: 0; 
    background-color:#f8a5c2;
    z-index: 1;
    margin-top:0;
    max-width:30em;
    border: 1px solid red;
`;

const Navigation = styled.div`
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1.0em;
    font-size: 1.0em;

    @media screen and (max-width: 480px) {
        font-size: 1.0em;
        justify-content: space-around;
    }
`;

const Item = styled.li`
    color: #f5f6fa;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    text-align:center;
    font-size: 1.5em;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        transition: .5s;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        margin:0;
    }
`;