import React from 'react'
import css from './card.module.css'

export default function Card(props) {
    const style = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className={css.card} style={style}>
            <div className={css.title}>
                <h1>{props.titulo}</h1>
                <h4>Geração de números aleatórios</h4>
            </div>
            <div className={css.content}>
                {props.children}
            </div>
        </div>
    )
}
