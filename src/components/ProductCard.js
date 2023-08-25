import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProductCard = ({item}) => { 
    return <div className='group relative'>
        <ProductImage src={item.image} />
        <Title title={item.title} oldPrice = {item.oldPrice} price= {item.price} category = {item.category} isNew = {item.isNew}/>
    </div>
}



const ProductImage = ({src}) => { 
    return <div className='w-full h-96 cursor-pointer overflow-hidden '>
        <img 
        className='w-full h-full object-cover group-hover:scale-110 duration-500'
        src={src} alt="Product Image"  />
    </div>
}

const Title = ({title,oldPrice,price,category,isNew}) => { 
    return <div className='w-full border-[1px] px-2 py-4 '>
       <div className='flex justify-between items-center'>
       <div>
            <h2 className='font-titleFont text-base font-bold '>{title.substring(0,15)}</h2>
       </div>
       <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
            <div className='flex flex-col gap-2 transform group-hover:translate-x-24 
            transition-transform duration-500  '>
               
                <p className='font-semibold'>${price} </p>        
            </div>
                <p className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex 
                items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 
                transition-transform cursor-pointer duration-500 '>
                    add to cart <span><BsArrowRight/></span>
                </p>    
                
       </div>
       
       </div>
       <div>
        <p> {category} </p>
       </div>
       <div className='absolute top-4 right-0 '>
        <p> {
            isNew && (<p
            className='bg-black text-white font-semibold font-titleFont px-6 py-1'
            >Sale</p>)
        } </p>
       </div>
    </div>
}



export default ProductCard