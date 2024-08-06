import { useState } from 'react';
import React from 'react'

function ItemCount() {
    const [cant, setCant] = useState(1)
    //let cant = 1
    const handleClicMenos = () => {
        if (cant === 1){
            alert("No se puede seleccionar menos de 1 producto")
            return
        }
        setCant(cant - 1)
    }
    const handleClicMas = () => {
        setCant(cant + 1)
    }


  return (
    <div>
        <button onClick={handleClicMenos}>-</button>
        <span>{cant}</span>
        <button onClick={handleClicMas}>+</button>
    </div>
  )
}

export default ItemCount