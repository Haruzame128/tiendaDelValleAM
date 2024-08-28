import { products } from "../mock/mockData"

export const getProds = (cat) =>{
    let filteredItems = products
    if (cat != undefined){
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


export const getProd = (cat) =>{
    let filteredItems = products
    if (cat != undefined){
       filteredItems = (products.find(prod => prod.id == cat))
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