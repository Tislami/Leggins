import React, { useState } from "react"
import {HiArrowRight, HiArrowLeft} from "react-icons/hi"
 

const Banner = () => { 

    var coverData = ["/assets/cover_1.jpg","/assets/cover_2.jpg","/assets/cover_3.jpg","/assets/cover_4.jpg"]

    const [currentSlide,setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? coverData.length - 1 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === coverData.length - 1 ? 0 : currentSlide + 1)
    }
    

    return <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <CoverImage coverData={coverData} currentSle={currentSlide}/>
            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-32">
                <BannerButton onClick={prevSlide}> <HiArrowLeft/> </BannerButton>
                <BannerButton onClick={nextSlide}> <HiArrowRight/> </BannerButton>
            </div>

        </div>
    </div>
}
export default Banner

const CoverImage = ({coverData,currentSle}) => { 
    return <div 
    style={{transform: `translateX(-${currentSle * 100}vw)` }}
    className="w-[400vw] h-full flex transition-transform duration-1000">
    {coverData.map((element, index) => (
        <img key={index} className="w-screen h-full object-cover" src={element} alt="Cover" />
    ))}
</div>
}

const BannerButton = ({onClick, children }) => { 
    return (
    <button onClick={onClick} className=" rounded-xl w-14 h-12 border-[1px] flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 border-gray-700">
        {children}
    </button>)
}