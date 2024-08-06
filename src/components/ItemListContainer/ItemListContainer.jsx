import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProd } from '../../utils/fetchData'


function ItemListContainer({title}) {
  const [prod, setProd] = useState([]);
  const [cat, setCat] = useState(null)

  useEffect(() => {
    getProd(cat)
  .then((res)=>{
    setProd(res)
  })
  .catch((err)=>{
    console.log(err)
  })   
  }, [cat])

  return (
    <>
      <div className='container'>
          <h1>
              {title}
          </h1>
          <ItemList products={prod}/>
      </div>
    </>
  )
}

export default ItemListContainer