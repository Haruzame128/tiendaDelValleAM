import { products } from "../mock/mockData"

export const getProd = (cat) =>{
    let filteredItems = products
    if (cat != null){
    filteredItems = products.filter((products) =>{
        return products.category.includes(cat)
    })
    }

    return new Promise((resolve, reject) => {
        if (products.length > 0){
            setTimeout(() => {
                resolve(filteredItems)  
            }, 2000);
        }else{
            reject('No se encontraron productos')
        }
    })
}