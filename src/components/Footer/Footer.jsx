import { products } from "../../mock/mockData"
import { db } from "../../firebase/dbconection"
import { collection, addDoc } from "firebase/firestore"
const Footer = () => {
  const addProd = () => {
    const productsCollection = collection(db, "productos")

    products.forEach((item)=>{
      addDoc(productsCollection, item)
      .then(doc => {
        console.log("producto agregado con ID: ", doc.id)
      })
      .catch((error) => {
        console.error("Error al agregar el producto ",error)
      })

    })
  }

  return(
    <>
    <footer> <button onClick={addProd}>agregar items</button> </footer>
    </>
  )
}

export default Footer