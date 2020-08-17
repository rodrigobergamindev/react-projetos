import React from 'react'
import styled from 'styled-components'
import { faBookmark, faRing, faBirthdayCake, faCalendar, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servicos() {
    return (
        <SecServicos id="servicos">
          <Title><FontAwesomeIcon icon={faBookmark} /> O QUE EU FAÇO</Title>
          <Tab>
            <Job>
              <h3> <FontAwesomeIcon icon={faCalendar} /> EVENTOS</h3>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries.</span>
            </Job>

            <Job>
              <h3><FontAwesomeIcon icon={faRing} /> CASAMENTOS</h3>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries.</span>
            </Job>

            <Job>
              <h3><FontAwesomeIcon icon={faBirthdayCake} /> ANIVERSÁRIOS</h3>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries.</span>
            </Job>

            <Job>
              <h3><FontAwesomeIcon icon={faCamera} /> ENSAIOS</h3>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries.</span>
            </Job>
          </Tab>
        </SecServicos>
    )
}


const SecServicos = styled.div`
  flex:1;
  background-color:#f8a5c2;
  padding: 2em;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`;

const Tab = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  max-width: 80em;
`

const Job = styled.div`
  color: #f5f6fa;
  font-family: 'Open Sans', sans-serif;
  display:flex;
  text-align:justify;
  flex-direction: column;
  justify-content: start;
  max-width: 30em;
  margin: 2em;
`

const Title = styled.div`

font-size: 1.5em;
text-align:center;
font-family: 'Open Sans', sans-serif;
font-weight: 700;
color: #f5f6fa;

`