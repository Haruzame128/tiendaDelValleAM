import { useCartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbconection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CarritoVacio from "./CarritoVacio"; 

const Cart = () => {
  const { carrito, total, removeItem, clearCart } = useCartContext();
  const [carritoVacio, setCarritoVacio] = useState(true)

  useEffect(()=>{
    if (carrito.length === 0){
      setCarritoVacio(true)
    }else{
      setCarritoVacio(false)
    }
  },[carritoVacio])

  const navigate = useNavigate()

  const handleRemoveItems = (id, precio, cantidad) => {
    removeItem(id, precio, cantidad);
    if ((carrito.length - 1) === 0){
      setCarritoVacio(true)
      navigate('/cart')
    }else{
      setCarritoVacio(false)
    }
    
  };

  const handleClearCart = () => {
    clearCart();
    setCarritoVacio(true)
    navigate('/cart')
  };


  const handleFC = () => {
    navigate("/cart/finalizarcompra")
  }
  return (
    <div className="container">
      {carritoVacio ? <CarritoVacio /> :
      <>
      <h1 className="tituloContenedor"> Carrito de Compras </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {carrito?.map(({ id, name, price, cantidad }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{cantidad}</td>
                <td>$ {price}</td>
                <td>$ {price * cantidad}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveItems(id, price, cantidad)}
                  >
                    Remover Item
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}></td>
            <td>$ {total}</td>
          </tr>
        </tbody>
      </Table>
          <Button
            variant="success"
            onClick={() => handleFC()}
            style={{ marginRight: "25px" }}
          >
            Finalizar Compra
          </Button>
          <Button variant="warning" onClick={() => handleClearCart()}>
            Limpiar Carrito
          </Button>
      </>
    }
    </div>
  );
};

export default Cart;
