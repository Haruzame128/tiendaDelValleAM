import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProds } from '../../utils/fetchData'
import { useParams } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"

// eslint-disable-next-line react/prop-types
function ItemListContainer({title}) {
  const [prod, setProd] = useState([]);
  const {categoryID} = useParams();
  //const { titulo } = useCartContext()

  useEffect(() => {
    getProds(categoryID)

  .then((res)=>{
    setProd(res)
  })
  .catch((err)=>{
    console.log(err)
  })   
  }, [categoryID])
  
    return (
      <>
        <div className='container'>
            <h1 className='tituloContenedor'>
                {title}
            </h1>
            <ItemList products={prod}/>
        </div>
      </>
    )
  

  
}

export default ItemListContainer