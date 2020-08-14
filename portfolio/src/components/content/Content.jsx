import React from 'react'
import styled from 'styled-components'


export default function Content() {
    return (
        <SecContent id="portfolio">
            <span>PORTFÓLIO</span>
        </SecContent>
    )
}
const SecContent = styled.div`
  grid-area: content;
  height:35em;
  background-color:white;
`;