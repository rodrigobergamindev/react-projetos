import React from 'react'
import styled from 'styled-components'


export default function About() {
    return (
        <SecAbout>SOBRE</SecAbout>
    )
}

const SecAbout = styled.div`
  grid-area: about;
  height:35em;
  background-color:#1abc9c;
`;