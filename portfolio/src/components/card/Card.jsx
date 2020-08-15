import React from 'react'
import styled from 'styled-components'


export default function Card() {
    return (
        <MyCard>2</MyCard>
    )
}

const MyCard = styled.div`
    width:350px;
    height:350px;
    background-color:#f5f6fa;
    font-size: 1.0em;
    margin:2em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 0.6em;
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }


`