import axios from "axios"

export async function productsData(){
    return await axios.get('https://fakestoreapi.com/products')
} 