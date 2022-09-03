import React from 'react'
import './Listado.css'

const Listado = ["HOLA", "HOLA", "HOLA", "MUNDO"]

const Lista = () => {

    const palabrasListado = Listado.map((palabra, index) =>

      <li key={index}><h1>{palabra}</h1></li>
    )

    
    return (
    <div>
        <ul>{palabrasListado}</ul>
    </div>
  
    )
}
export default Lista;