import React from 'react'

export default function Aleatorio(props) {
    const getRandomInt = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <span>Valor Mínimo: {props.min}</span><br/>
            <span>Valor Máximo: {props.max}</span><br/>
            <span>Valor Escolhido: {getRandomInt}</span><br/>
        </div>
    )
}
