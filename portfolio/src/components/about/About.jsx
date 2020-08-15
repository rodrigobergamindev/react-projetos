import React from 'react'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll'


export default function About() {
    return (
        <SecAbout id="sobre">
          <span onClick={() => scroll.scrollToTop()}>SOBRE</span>
          </SecAbout>
    )
}

const SecAbout = styled.div`
  flex:1;
  height:35em;
  background-color:#1abc9c;
`;