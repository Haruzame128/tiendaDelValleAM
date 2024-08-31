import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/dbconection";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const FinalizarCompra = () => {
    const { carrito, total, clearCart } = useCartContext();
    const [formData, setFormData] = useState()
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }
    
      const handleSaveCart = () => {
        
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
            clearCart()
            setFormData({name: "", tel: "", email: ""})
            navigate('/')
        })
        .catch((error)=>{
            console.error("Error al realizar la compra: ",error)
        })
    
      }
  return (
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
          </form>
    </div>
  )
}

export default FinalizarCompra