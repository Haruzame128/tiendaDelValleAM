import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { db } from "../../firebase/dbconection"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ItemListContainer({title}) {
  const [prod, setProd] = useState([]);
  const {categoryID} = useParams();
  //const { titulo } = useCartContext()

  useEffect(() => {
    let productsCollection = collection(db, "productos")

    if(categoryID){
      productsCollection = query(productsCollection, where("category", "array-contains", categoryID)) 
    }
      getDocs(productsCollection).then(({docs}) => {
        const prodFromDocs = docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }))
        setProd(prodFromDocs)
      })
      .catch((error) => {
        console.error("Error al obtener los documentos: ", error)
      })   
    
  }, [categoryID])
  
    return (
       <>
         { <div className='container'>
             <h1 className='tituloContenedor'>
                 {title}
             </h1>
             <ItemList products={prod}/>
         </div> }
       </>
    )
  

  
}

export default ItemListContainer