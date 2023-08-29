import React from 'react'
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/product/${item.id}`,
            {
                state:{
                    item: item
                }
            }
        )
    }
    return <div
        onClick={handleDetails}
        className='relative group w-72 h-[26rem] bg-white  border-[1px] pt-2 rounded-lg shadow-sm hover:scale-105 duration-500 overflow-hidden cursor-pointer  '>
        <ProductImage src={item.image}/>
        <Title title={item.title} price={item.price} category={item.category}/>
        <AddToCartButton/>
    </div>
}


const ProductImage = ({src}) => {
    return <div className='group px-2 w-full h-5/6 cursor-pointer group-hover:h-[50%] ease-in-out duration-500'>
        <img className='w-full h-full object-scale-down' src={src} alt="Product Image"/>
    </div>
}

const Title = ({title, price, category}) => {
    return <div className='flex flex-col justify-between pt-4 bg-white'>

        <div className='w-full px-2 flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <h2 className='font-titleFont text-base font-extrabold'> {title.substring(0, 15)} </h2>
                <p className='text-xs text-gray-400 text-start'> {category} </p>
            </div>
            <p className='font-semibold'>${price}</p>
        </div>

        <div
            className="group w-full pt-4 pb-2 px-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-500 ">
            <div>
                <h5 className='text-sm font-semibold'>Sizes</h5>
                <ul className='flex gap-2'>
                    <li className='text-xs text-gray-400'>XS</li>
                    <li className='text-xs text-gray-400'>S</li>
                    <li className='text-xs text-gray-400'>M</li>
                    <li className='text-xs text-gray-400'>XL</li>
                </ul>
            </div>

            <div>
                <h3 className='text-sm font-semibold  '>Colors</h3>
                <ul className='flex gap-2'>
                    <li className="w-4 h-4 rounded-full bg-red-500 "></li>
                    <li className="w-4 h-4 rounded-full bg-blue-500 "></li>
                    <li className="w-4 h-4 rounded-full bg-gray-500 "></li>
                    <li className="w-4 h-4 rounded-full bg-yellow-500 "></li>
                </ul>
            </div>
        </div>
    </div>
}

const AddToCartButton = () => {
    return <div className='h-10 w-full absolute -bottom-10 group-hover:bottom-0 duration-500'>
        <button
            className="h-full w-full  bg-primary hover:bg-[#f58e34] duration-0 text-[0.75rem] text-center font-medium border rounded-b-lg flex items-center justify-center ">
         <span>
            </span>
            Add to Cart
        </button>
    </div>
}


export default ProductCard