/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ItemCount({stock, inicial, handleOnBuy}) {
    const [cant, setCant] = useState(inicial);
    const [itemAdded, setItemAdded] = useState(false);
    const navigate = useNavigate();
    //let cant = 1

    const handleClick = (op) =>{
        op === "-" ? clickMenos() : clickMas();
    }
    const clickMenos = () => {
        if (cant === 1){
            alert("No se puede seleccionar menos de 1 producto")
            return
        }
        setCant(cant - 1)
    }
    const clickMas = () => {
        if (cant === stock){
            alert("No hay mas Stok")
        }else{
            setCant(cant + 1)
        }
    }

    const handleAddToCart = () => {
        handleOnBuy(cant)
        setItemAdded(true)
    }

    const handleGoToCheckOut = () => {
        navigate("/cart")
    }

  return (
    <>
        {!itemAdded ? (
            <>
            <div style={{marginBottom: '10px'}}>
            <button onClick={() => handleClick("-")}>-</button>
            <span> {cant} </span>
            <button onClick={() => handleClick("+")}>+</button>
            </div>
            <Button variant="secondary" onClick={handleAddToCart} >
                Agregar al carrito
            </Button>
            </>
        ) : (
            <Button variant="secondary" onClick={handleGoToCheckOut}>
                Ir al Carrito
             </Button>
        )

        }
    </>
  )
}

export default ItemCount