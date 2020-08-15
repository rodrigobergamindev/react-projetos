import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'


export default function Navbar(props) {
    const nav = props.menu
    return (
        <Navigation>
            {
               nav.map((element, index) => {
                   return (
                   <Item key={index}>
                       <Link
                            activeClass="active"
                            to={`${element.url}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={2000}>
                                {element.name}
                            </Link>
                       </Item> 
                   )
               }) 
            }
        </Navigation>
    )
}

const Navigation = styled.div`
    flex:1;
    position: sticky;
    position: -webkit-sticky;
    top: 0; 
    background-color:#f8a5c2;
    z-index: 1;
    margin-top:0;
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    padding: 0.5em;
    text-align:center;
    margin-right: 1.5em;
    border-radius:5px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        background: #f5f6fa;
        color:#f8a5c2;
        transition: .5s ease;
        transform: scale(1.2, 1.2);
        box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    }

    @media screen and (max-width: 500px) {
        margin-right:0;
    }
`;