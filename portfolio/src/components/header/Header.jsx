import React from 'react'
import avatar from '../../images/avatar.jpg'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';





export default function Header() {
    
    return (
        <SecHeader id="home">
        <Card>
            <Perfil src={avatar} alt="avatar"></Perfil>
            <Title>Lídia Martins</Title>
            <Subtitle>MAKEUP ARTIST<hr/></Subtitle>
        </Card>
            <Navigation>
                    <SocialMediaItem><a href={"https://www.facebook.com/limartinsmakeup"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></SocialMediaItem>
                    <SocialMediaItem><a href={"https://br.pinterest.com/lidia8martins/make/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} /></a></SocialMediaItem>
                    <SocialMediaItem><a href={"https://www.instagram.com/lidia_martinns/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="instagram" /></a></SocialMediaItem>
                    <SocialMediaItem><a href={"https://api.whatsapp.com/send?phone=551194004-2911&text=Gostaria%20de%20mais%20informações%20!"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></SocialMediaItem>
            </Navigation>
        </SecHeader>
    )
}


/**STYLED COMPONENTS */

const SecHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color:#f8a5c2;
    `;


const Navigation = styled.ul`
    margin: 0.5em;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.3em;
    border-radius: 2em;
`;

const SocialMediaItem = styled.li`
        margin: 0.5em;
        margin-top: 0.125em;
        color: #f5f6fa;
        font-size: 2.0em;
        transition: 1s;
        transform: scale(1.0,1.0);
        &:hover{
            transition: 0.5s;
            transform: scale(1.5,1.5);
        }
`;



const Perfil = styled.img`
    max-width:13em;
    border: 1.3em solid #f5f6fa;
    margin-left: 0.5em;
    border-radius: 10em;
    transition: 1s;
    transform: scale(1.0,1.0);
    &:hover{
        transition: 1s;
        transform: scale(1.2,1.2);
        box-shadow:0 0 15px white, 0 0 15px white;
    }

`;

const Card = styled.div` 
    margin-top: 2.5em;
    display: flex;
    flex-direction: column;
    justify-content:center;
    font-family: 'Open Sans', sans-serif;
`;

const Title = styled.div`
    font-size: 2.5em;
    margin-top: 1.2em;
    margin-bottom: 0.15em;
    color: #f5f6fa;
    font-weight: 700;
    text-align:center;
`;

const Subtitle = styled(Title)`
    text-align:center;
    font-size: 1.2em;
    font-weight: 300;
    margin-top:0.5em;
    font-family: 'Open Sans', sans-serif;

    hr {
        height:2px;
        width:4em;
        background-color:#f5f6fa;
        border: 0;
    }
`;

