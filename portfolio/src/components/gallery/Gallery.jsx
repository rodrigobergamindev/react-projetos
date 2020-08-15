import React from 'react'
import styled from 'styled-components'
import Card from '../card/Card'

export default function Gallery() {
    return (
        <MyGallery>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </MyGallery>
    )
}


const MyGallery = styled.div`
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content:center;
    background-color:#e66767;
    padding:1em;
    border-radius:2.2em;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media screen and (max-width: 480px) {
        width:92.5%;
    }
`;
