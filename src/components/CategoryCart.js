import React from 'react'

const CategoryCart = ({src, title}) => {

    return <div className={"group hover:scale-110 duration-300 mx-7 flex flex-col items-center justify-center "}>
        <ProductImage src={src}/>
        <Title title={title}/>
    </div>
}

const ProductImage = ({src}) => {
    return <div className='px-2 w-[200px] h-[200px] rounded-full cursor-pointer'>
        <img className=' rounded-full' src={src} alt="Product Image"/>
    </div>
}

const Title = ({title}) =>{
    return <div>
        <p className={"capitalize font-medium text-lg group-hover:underline underline-offset-8 group-hover:text-primary duration-300"}>
            {title}
        </p>
    </div>
}

export default CategoryCart