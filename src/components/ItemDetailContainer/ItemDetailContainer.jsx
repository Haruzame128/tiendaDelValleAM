/* eslint-disable react/prop-types */


import "./ItemDetailContainer.css"
import { useState, useEffect } from 'react'
import { getProd } from '../../utils/fetchData'
import { useParams } from 'react-router-dom'
import ItemDetailList from "../ItemDetailList/ItemDetailList"


function ItemDetailContainer({title}) {
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
            <ItemDetailList products={prod}/>
        </div>
        </>
    )
}

export default ItemDetailContainer