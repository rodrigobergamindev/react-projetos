import React from 'react'
import produtos from '../data/produtos'


export default function ListaDeProdutos() {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
      {
          produtos.map((produto, index) => {
            return <tr key={index}>
            <th scope="row">{index}</th>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
            </tr>
          })
      }
  </tbody>
</table>
        </div>
    )
}
