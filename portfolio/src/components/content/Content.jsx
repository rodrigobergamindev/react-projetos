import React from 'react'
import styled from 'styled-components'
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from '../card/Card'


import img1 from '../../images/1.jpg'
import img2 from '../../images/3.jpg'
import img3 from '../../images/5.jpg'
import img4 from '../../images/7.jpg'
import img5 from '../../images/22.jpg'
import img6 from '../../images/12.jpg'
import img7 from '../../images/13.jpg'
import img8 from '../../images/14.jpg'
import img9 from '../../images/15.jpg'
import img10 from '../../images/16.jpg'
import img12 from '../../images/23.jpg'
import img13 from '../../images/24.jpg'

const albumPortfolio = [
    {image: img1, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img2, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img3, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img4, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img6, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img7, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img8, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img9, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img10, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img5, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img12, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" },
    {image: img13, title: "Artística", description: "Nessa make foi utilizado rimel, blush e outros produtos" }
]



export default function Content() {
    return (
        <SecContent id="portfolio">
            <Title><FontAwesomeIcon icon={faSuitcase} /> MAKES & JOBS</Title>
            <Gallery>
                {albumPortfolio.map((item, index) => {
                    return (
                    <Card key={index} image={item.image} title={item.title} description={item.description}>
                    </Card>
                    )
                })}
            </Gallery>
        </SecContent>
    )
}
const SecContent = styled.div`
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content:center;
    flex-direction:column;
    background-color:#f5f6fa;
    padding: 2em;
    flex-wrap: wrap;
    justify-content:center;

    @media screen and (max-width: 480px) {
        padding:0;
        border-top-right-radius:1.5rem;
        border-top-left-radius:1.5rem;
    }
`;

const Title = styled.div`
    font-size: 1.2em;
    text-align:center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    color: #f8a5c2;

    @media screen and (max-width: 480px) {
        margin-top:2.5em;
    }
`

const Gallery = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    flex-wrap:wrap;
    margin:2em;
    max-width:80em;
    box-sizing: border-box;
`