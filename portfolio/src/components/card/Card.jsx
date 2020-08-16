import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'



export default function Card(props) {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" infinite={true} containerStyle={{margin:`${0.3}em`}}>
          <FlipCardFront src={props.image} alt="portfolio" onClick={handleClick}>
            </FlipCardFront>
   
            <FlipCardBack onClick={handleClick}>
                <div>
                    <h3>{props.title}<hr/></h3>
                <span>{props.description}</span>
                </div>
            </FlipCardBack>
        </ReactCardFlip>
      )
}

const FlipCardFront = styled.img`
    width: 16em;
    height: 16em;
    border-radius: 0.6em;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);

    @media screen and (max-width: 350px) {
        width: 13em;
        height: 13em;
    }

    @media screen and (max-width: 300px) {
        width: 11em;
        height: 11em;
    }
`


const FlipCardBack = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    border-radius: 0.6em;

    width: 16em;
    height: 16em;
    padding:2em;

    box-sizing:border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    background-color:#f8a5c2;
    text-align:justify;
    font-family: 'Open Sans', sans-serif;
    font-weight:300;
    color: #f5f6fa;

    hr {
        height:1px;
        background-color:#f5f6fa;
        border: 0;
        padding:0;
    }

    h3 {
        text-align:center;
        margin:0;
    }

    @media screen and (max-width: 350px) {
        width: 13em;
        height: 13em;
    }

    @media screen and (max-width: 300px) {
        width: 11em;
        height: 11em;
    }

`