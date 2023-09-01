import React from 'react'
import {useLoaderData} from "react-router-dom"
import ProductCard from "./ProductCard";


const RelatedProducts = () => {
    let data = useLoaderData().data

    return (
        <div className={"border-t-2 py-6"}>
            <p className={"font-semibold my-4 mx-4"}> Related Products</p>
            <div className={"relative flex items-center"}>
                <div className={"w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"}>
                    {data.map((item) =>
                        <div className={"inline-block px-4"}>
                            <ProductCard item={item}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default RelatedProducts