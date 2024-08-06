import React from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProd } from '../../utils/fetchData'
import { useParams } from 'react-router-dom'
import SingleItem from '../Item/SingleItem'


function ItemListContainer({title}) {
  const [prod, setProd] = useState([]);
  const {categoryID} = useParams();

  useEffect(() => {
    getProd(categoryID)
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