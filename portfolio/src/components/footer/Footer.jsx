import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <SecFooter>
            <Title>TODOS OS DIREITOS RESERVADOS</Title>
        </SecFooter>
    )
}


const SecFooter = styled.div`
    color: #f5f6fa;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:0.5em;
`
const Title = styled.div`
font-size: 0.87em;
text-align:center;
font-family: 'Open Sans', sans-serif;
font-weight: 300;
`