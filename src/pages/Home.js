import React, {useEffect, useState} from "react"
import Banner from "../components/Banner"
import Products from "../components/Products"
import {useLoaderData} from "react-router-dom"
import TrendingCategories from "../components/TrendingCategories";

const Home = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data.data)
    })


    return <div>
        <Banner/>
        <TrendingCategories />
        <Products products={products}/>
    </div>
}
export default Home