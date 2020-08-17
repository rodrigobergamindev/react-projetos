import React from 'react'
import styled from 'styled-components'
import { faIdCard, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar_about from '../../images/avatar_2.png'

export default function About() {
    return (
        <SecAbout id="sobre">
          <Title><FontAwesomeIcon icon={faIdCard} /> SOBRE MIM</Title>
          <TabCard>
            <img src={avatar_about} alt="sobre mim"/>
            <Desc>
            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:`${1.5}em`}}/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. specimen book. <FontAwesomeIcon icon={faQuoteRight} style={{fontSize:`${1.5}em`}} />

            </Desc>
          </TabCard>
          </SecAbout>
    )
}

const SecAbout = styled.div`
  padding: 2em;
  flex:1;
  max-height:35em;
  background-color:#f5f6fa;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.div`
color: #f8a5c2;
font-size: 1.5em;
text-align:center;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

const TabCard = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height: 25em;
  width: 50em;
  margin:3em;
  background-color:#f8a5c2;
  box-sizing: border-box;
  border-radius:1.2em;

  img{
    max-width: 50%;
    border-top-left-radius:1.2em;
    border-bottom-left-radius:1.2em;
  }

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.08, 1.08);
  }


  @media screen and (max-width: 930px) {
    flex-direction:column;
    max-width: 20em;
    img {
      border-radius:10em;
      max-width:10em;
      border: 0.1em solid #f5f6fa;
    }
  }

  @media screen and (max-width: 800px) {
    img {
      margin-top:1em;
      max-width:9em;
    }
  }

  @media screen and (max-width: 350px) {
    max-width:17em;

    img {
      max-width:8em;
      margin-top:2em;
    }
  }



`

const Desc = styled.span`
  font-family:'Open Sans',sans-serif;
  font-weight:300;
  color: #f5f6fa;
  font-size: 1.2em;
  margin:1.2em;
  text-align: justify;

  @media screen and (max-width: 930px) {
    margin-right: 1.5em;
    margin-left: 1.5em;
    font-size: 1em;
  }



`