import React from 'react'
import alunos from '../data/alunos.js'


export default function ListaDeAlunos() {
    
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {alunos.map((aluno, index) => {
                    return <li key={index}>{aluno.id} - {aluno.nome} - {aluno.nota}</li>
                })}
            </ul>
        </div>
    )
}
