/* eslint-disable react/prop-types */


import "./ItemDetailContainer.css"
import { useState, useEffect } from 'react'
import { db } from "../../firebase/dbconection"
import { collection, getDoc, doc } from "firebase/firestore"
import { useParams } from 'react-router-dom'
import ItemDetailList from "../ItemDetailList/ItemDetailList"
import { Spinner } from "../spinner/Spinner"


function ItemDetailContainer({title}) {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true)
  const {categoryID} = useParams();

  useEffect(() => {
   const productCollection = collection(db, "productos")
   const refDoc = doc(productCollection, categoryID)

   getDoc(refDoc)
    .then((doc) => {
      setProd({id: doc.id, ...doc.data()})
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error al obtener el documento: ",error)
    })


  }, [categoryID])

    return (
        <>
        <div className='container'>
          {loading ? <Spinner /> :
            <>
              <h1 className='tituloContenedor'>
                  {title}
              </h1>
              <ItemDetailList products={prod}/>
            </>
          }
        </div>
        </>
    )
}

export default ItemDetailContainer