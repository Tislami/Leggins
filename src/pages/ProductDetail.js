import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import {MdOutlineStar} from "react-icons/md";
import RelatedProducts from "../components/RelatedProducts";
import Reviews from "../components/Reviews";

const ProductDetail = () => {
    const location = useLocation()
    const [details, setDetails] = useState({})
    const [rating, setRating] = useState({})


    useEffect(() => {
        setDetails(location.state.item)
        setRating(location.state.item.rating)
    }, [])

    return <div className={""}>
        <div className={"max-w-screen h-full mb-20 mt-10 mx-40 flex justify-center gap-10 "}>
            <ProductImage src={details.image} alt={details.name}/>
            <div className={"flex flex-col gap-12"}>
                <div>
                    <ProductTitle title={details.title}/>
                    <Description text={details.description}/>
                </div>

                <div className={"flex justify-between items-center"}>
                    <ProductPrice price={details.price}/>
                    <Rate rate={rating.rate} reviewCount={rating.count}/>
                </div>

                <div className={"border-b-2 flex flex-col gap-4"}>
                    <Colors image={details.image}/>
                    <Sizes/>
                </div>

                <AddToCartButton/>
            </div>
        </div>
        <RelatedProducts/>
        <Reviews/>
    </div>
}
const ProductImage = ({src, alt}) => {
    return <>
        <img className={"w-[550px] h-[550px] object-scale-down "} src={src} alt={alt}/>
    </>
}
const ProductTitle = ({title}) => {
    return <>
        <h2 className={"text-2xl font-bold"}>{title}</h2>
    </>
}
const ProductPrice = ({price}) => {
    return <>
        <p className={"text-xl font-semibold text-gray-900"}>
            $ {price}
        </p>
    </>
}
const Rate = ({rate, reviewCount}) => {

    const stars = Array.from({length: 5}, (_, index) => (
        <MdOutlineStar
            key={index}
            style={{color: index < rate ? "#f2a942" : "#ddd"}}
        />
    ));

    return <div className={"flex items-center justify-center gap-2"}>
        <div className={"flex items-center"}> {stars} </div>
        <p className={"text-xs text-gray-500"}>{rate} ({reviewCount} review)</p>
    </div>
}
const Colors = ({image}) => {
    return <div className={"flex flex-col gap-2 py-2 border-t-1 border-b-1 border-gray-200"}>
        <div className={"flex items-center gap-1"}>
            <p className={"text-base font-semibold text-gray-500 "}>Color: </p>
            <p className={"text-base font-semibold"}> Orange</p>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li className="cursor-pointer w-12 h-12 py-1 flex justify-center items-center border-primary border-2">
                    <img
                        className={"w-full h-full object-scale-down "} src={image} alt="adlkfşmsd"/></li>
                <li className="cursor-pointer w-12 h-12 py-1 flex justify-center items-center border "><img
                    className={"w-full h-full object-scale-down "} src={image} alt="adlkfşmsd"/></li>
                <li className="cursor-pointer w-12 h-12 py-1 flex justify-center items-center border "><img
                    className={"w-full h-full object-scale-down "} src={image} alt="adlkfşmsd"/></li>
                <li className="cursor-pointer w-12 h-12 py-1 flex justify-center items-center border "><img
                    className={"w-full h-full object-scale-down "} src={image} alt="adlkfşmsd"/></li>
                <li className="cursor-pointer w-12 h-12 py-1 flex justify-center items-center border "><img
                    className={"w-full h-full object-scale-down "} src={image} alt="adlkfşmsd"/></li>
            </ul>
        </div>
    </div>
}
const Sizes = () => {
    return <div className={"flex flex-col gap-2 pt-2 pb-8 border-b-1 border-gray-200"}>
        <div className={"flex items-center gap-1"}>
            <p className={"text-base font-semibold text-gray-500 "}>Size: </p>
            <p className={"text-base font-semibold"}> XS</p>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li className="cursor-pointer w-7 h-7 flex justify-center items-center text-sm font-medium p-5 border-primary border-2">XS</li>
                <li className="cursor-pointer w-7 h-7 border flex justify-center items-center text-sm font-medium p-5 ">S</li>
                <li className="cursor-pointer w-7 h-7 border flex justify-center items-center text-sm font-medium p-5 ">M</li>
                <li className="cursor-pointer w-7 h-7 border flex justify-center items-center text-sm font-medium p-5 ">L</li>
                <li className="cursor-pointer w-7 h-7 border flex justify-center items-center text-sm font-medium p-5 ">XL</li>
            </ul>
        </div>
    </div>
}
const Description = ({text}) => {
    return <>
        <p className={" pl-2 text-sm text-gray-500"}>
            {text}
        </p>
    </>
}

const Quantity = () => {
    return <>
        <div className={"w-52 flex items-center justify-between text-gray-500 gap-4  p-3"}>
            <div className={"flex items-center gap-4 text-sm font-semibold"}>
                <button
                    className={" h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"}>-
                </button>
                <span>{1}</span>
                <button
                    className={" h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"}>+
                </button>
            </div>
        </div>
    </>
}

const AddToCartButton = () => {
    return <>
        <button
            className="h-12 bg-primary hover:bg-[#f58e34] duration-0 text-base text-center font-medium border rounded-lg flex items-center justify-center ">
         <span>
            </span>
            Add to Cart
        </button>
    </>
}


export default ProductDetail