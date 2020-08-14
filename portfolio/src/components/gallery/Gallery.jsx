import React from 'react'
import styled from 'styled-components'
import Card from '../card/Card'

export default function Gallery() {
    return (
        <myGallery>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </myGallery>
    )
}


const myGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    height:800px;
    width:800px;
    background-color:white;
`;
