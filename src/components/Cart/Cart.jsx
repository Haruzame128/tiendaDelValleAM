import { useCartContext } from "../../context/CartContext"
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Cart = () => {
    const {carrito, total, removeItem, clearCart} = useCartContext();

    const handleRemoveItems = (id, precio, cantidad) => {
        removeItem(id, precio, cantidad)
    }

    const handleClearCart = () => {
        clearCart();
    }

  return (
    <div className="container">
         <h1 className='tituloContenedor'> Carrito de Compras </h1>
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
            {
                carrito?.map(({id, name, price, cantidad}, index) =>{
                    return(
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{cantidad}</td>
                            <td>$ {price}</td>
                            <td>$ {price * cantidad}</td>
                            <td><Button variant="outline-danger" size="sm" onClick={() => handleRemoveItems(id, price, cantidad)}>Remover Item</Button></td>
                        </tr>
                    )
                })
            }
            <tr>
            <td colSpan={4}></td>
            <td>$ {total}</td>
            </tr>
        </tbody>
        </Table>
        <Button variant="warning" onClick={() => handleClearCart()}>Limpiar Carrito</Button>
    </div>
  )
}

export default Cart