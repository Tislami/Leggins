
import React from 'react'
import ProductCard from './ProductCard'

const Product = () => { 
    return <div className='py-10'>
        <Greeting/>
        <div className='max-w-screen-xl mx-auto'>
            <ProductCard />
        </div>
    </div>
}



const Greeting = () => { 
    return <div className='flex flex-col items-center gap-4'>
    <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shoping Everyday</h1>
    <span className='w-20 h-[3px] bg-black'></span>
    <p className="max-w-[700px] text-gray-600 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime magni neque rem assumenda culpa. Fugiat facilis est laudantium officia? Quaerat est at totam incidunt laborum. Ea eligendi consequatur quos!
    </p>
</div>
}







export default Product
