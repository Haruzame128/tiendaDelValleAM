/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext)
}

const CartContextProvider = ({children}) =>{

    const [cantidadItems, setCantidadItems] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const localCart = JSON.parse(localStorage.getItem('carrito'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localCantidad = JSON.parse(localStorage.getItem('cantidad'))
        if (localCart && localTotal && localCantidad){
            setCarrito(localCart)
            setTotal(localTotal)
            setCantidadItems(localCantidad)
        }
    },[])
    const isInCart = (id) => {
        return carrito.find((elem)=> elem.id === id)
    }

    const addToCart = (item, cantidad) => {
        setCantidadItems((cantidadItems + cantidad))
        setTotal(total + (item.price * cantidad))
        let newCart = [];
        if (isInCart(item.id)){
            newCart = carrito.map((elem)=>{
                if (elem.id === item.id){
                 return {...elem, cantidad: elem.cantidad + cantidad}   
                }else {
                    return elem
                }
            })
        }else{
            newCart = [...carrito, {...item, cantidad} ]
        }
        setCarrito(newCart)
        
        localStorage.setItem('carrito', JSON.stringify(newCart))
        localStorage.setItem('total', JSON.stringify(total))
        localStorage.setItem('cantidad', JSON.stringify(cantidadItems))
    }

    const removeItem = (id, precio, cantidad) =>{
        setTotal(total - (precio * cantidad))
        setCantidadItems(cantidadItems - cantidad)

        const newCart = carrito.filter((elem) => elem.id !== id)

        setCarrito(newCart)
        localStorage.setItem('carrito', JSON.stringify(newCart))
        localStorage.setItem('total', JSON.stringify(total))
        localStorage.setItem('cantidad', JSON.stringify(cantidadItems))
    }

    const clearCart = () =>{
        setCantidadItems(0)
        setCarrito([])
        setTotal(0)
        localStorage.removeItem('carrito')
        localStorage.removeItem('total')
        localStorage.removeItem('cantidad')
    }

    const contextValue = {
        titulo: 'Curso de React',
        cantidadItems: cantidadItems,
        addToCart: addToCart
    }


    return <Provider value={contextValue} >{children}</Provider>
}

export default CartContextProvider;