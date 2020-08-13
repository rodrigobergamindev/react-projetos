import React from 'react'
import styled from 'styled-components'


export default function Content() {
    return (
        <SecContent>
            PORTFÓLIO
        </SecContent>
    )
}
const SecContent = styled.div`
  grid-area: content;
  height:35em;
  background-color:white;
`;