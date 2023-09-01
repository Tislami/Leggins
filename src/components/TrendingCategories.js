import React from 'react'
import CategoryCart from "./CategoryCart";
import ProductCard from "./ProductCard";

const TrendingCategories = () => {

    const categories = ["/assets/category-1.jpg","/assets/category-2.jpg","/assets/category-3.jpg","/assets/category-4.jpg","/assets/category-5.jpg"]

    return <div>
        <Greeting/>
        <div className={"w-full flex justify-center"}>
            {categories.map((item) =>
                <CategoryCart src={item} title={item.split("/")[2].split(".")[0]}/>
            )}
        </div>
    </div>
}

const Greeting = () => {
    return <div className='flex flex-col items-center gap-4 py-10'>
        <h1 className='text-4xl text-center'>Trending Categories</h1>
        <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime magni neque rem assumenda culpa.
        </p>
    </div>
}


export default TrendingCategories