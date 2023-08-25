
import React from 'react'
import {ImGithub} from "react-icons/im"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa"


const SocialMediaIcons = () => { 
    var logos = [<ImGithub />,<FaFacebookF/>,<FaTwitter/>,<FaInstagram/>,<FaYoutube/>]
    return <div className='flex gap-5 text-lg text-gray-400'>
        {logos.map((logo, index) => ( 
            <div className = "hover:text-white duration-300 cursor-pointer" >
                {logo} 
            </div>
            )
        )}
    </div>
}


export default SocialMediaIcons