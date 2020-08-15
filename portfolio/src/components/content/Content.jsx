import React from 'react'
import styled from 'styled-components'
import Gallery from '../gallery/Gallery'
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Content() {
    return (
        <SecContent id="portfolio">
            <Title><h1>MAKES & JOBS <FontAwesomeIcon icon={faSuitcase} /></h1></Title>
           <Gallery></Gallery>
        </SecContent>
    )
}
const SecContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#f5f6fa;
    padding: 5em;
    flex-wrap: wrap;
    flex:1;
    justify-content:center;

    @media screen and (max-width: 480px) {
        padding:0;
    }
`;

const Title = styled.div`
    margin-top:1.0em;
    margin-bottom:1.0em;
    padding: 0.7em;
    border-radius:2.2em;
    font-size: 1.0em;
    text-align:center;
    font-family: 'Roboto', sans-serif;
    color: #e66767;
`

