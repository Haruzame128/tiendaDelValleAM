import { useCartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbconection";

const Cart = () => {
  const { carrito, total, removeItem, clearCart } = useCartContext();
  const [formData, setFormData] = useState({namef: "", tel: "", email: ""})

  const handleRemoveItems = (id, precio, cantidad) => {
    removeItem(id, precio, cantidad);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSaveCart = () => {
    console.log("saving data base") 
    console.log(carrito)
    console.log(formData)
    
    const orderCollection = collection(db, "orders")
    const newOrder = {
        buyer: formData,
        items: carrito,
        date: new Date(),
        total: total
    }

    addDoc(orderCollection, newOrder)
    .then((doc)=>{
        alert("Orden guardada con el ID: " + doc.id)
        console.log("Orden guardada con el ID: " + doc.id)
        clearCart()
        setFormData({namef: "", tel: "", email: ""})
    })
    .catch((error)=>{
        console.error("Error al realizar la compra: ",error)
    })

  }

  return (
    <div className="container">
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
      <div className="container">
        <h2 style={{marginBottom: '20px'}}>Formulario para finalizar la compra</h2>
        <form>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => handleOnChange(e)}
                value={formData.namef}
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="tel" className="col-sm-2 col-form-label">
              Telefono
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="tel"
                name="tel"
                onChange={(e) => handleOnChange(e)}
                value={formData.tel}
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              E-Mail
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleOnChange(e)}
              ></input>
            </div>
          </div>
          <Button
            variant="success"
            onClick={() => handleSaveCart()}
            style={{ marginRight: "25px" }}
          >
            Finalizar Compra
          </Button>
          <Button variant="warning" onClick={() => handleClearCart()}>
            Limpiar Carrito
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
