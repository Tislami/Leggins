
import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products}) => { 

    return <div className='py-32'>
        <Greeting/>
        <div className='max-w-screen-xl mx-auto py-10 mt-10 grid grid-cols-4 gap-10'>
            {products.map((item)=> 
                <ProductCard key= {item.id} item={item}/>
            )}            
        </div>
    </div>
}



const Greeting = () => { 
    return <div className='flex flex-col items-center gap-4'>
    <h1 className='text-4xl py-2 w text-center'>Shoping Everyday</h1>
    <p className="max-w-[800px] text-gray-600 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime magni neque rem assumenda culpa. Fugiat facilis est laudantium officia? Quaerat est at totam incidunt laborum. Ea eligendi consequatur quos!
    </p>
</div>
}







export default Products
