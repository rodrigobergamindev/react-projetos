import React from 'react'
import styled from 'styled-components'
import Gallery from '../gallery/Gallery'


export default function Content() {
    return (
        <SecContent id="portfolio">
            <Gallery></Gallery>
        </SecContent>
    )
}
const SecContent = styled.div`
  grid-area: content;
  height:800px;
`;

