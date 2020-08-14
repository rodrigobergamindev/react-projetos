import React from 'react'
import styled from 'styled-components'


export default function Servicos() {
    return (
        <SecServicos id="servicos">SERVIÇOS</SecServicos>
    )
}


const SecServicos = styled.div`
  grid-area: servicos;
  height:35em;
  background-color:#95a5a6;
`;