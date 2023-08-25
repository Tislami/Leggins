import React from 'react'
import AppLogo from './AppLogo'
import SocialMediaIcons from './SocialMediaIcons'
import {BsPersonFill, BsPaypal} from "react-icons/bs"
import {FaHome} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"

const Footer = () => { 
    return <div className='bg-black text-[#949494] py-20 font-title'>
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            <LogoIcon/>
            <LocateUs/>
            <Profile/>
            <Subscribe/>
        </div>
    </div>
}




const LogoIcon = () => { 
    return <div className='flex flex-col gap-7'>
    <AppLogo/>
    <p className='text-white text-sm tracking-wide'> ReactBD.com</p>
    <img className="w-56" src="/assets/payment_logo.png" alt="Payment Logos" />
    <SocialMediaIcons/>
</div>
}


const LocateUs = () => { 
    return <div>
    <h2 className='text-xl font-semibold text-white mb-4'>
        Locate Us
    </h2>
    <div className='text-base flex flex-col gap-2'>
        <p>Philadelphia/Pensylvania</p>
        <p>Mobile: +1 862 622 8548</p>
        <p>Phone: +1 862 622 8548</p>
        <p>E-Mail: islami.tariyel@gmail.com</p>
    </div>
</div>
}

const Profile = () => { 
    return <div>
    <h2 className='text-xl font-semibold text-white mb-4'>
        Profile
    </h2>
    <div className='flex flex-col gap-2 text-base'>
        <ProfileItem icon={<BsPersonFill/>} text={"My Account"} />
        <ProfileItem icon={<BsPaypal/>} text={"Checkout"} />
        <ProfileItem icon={<FaHome/>} text={"Home"} />
        <ProfileItem icon={<MdLocationOn/>} text={"Help & Support"} />
    </div>
    
</div>
}

const ProfileItem = ({icon,text}) => { 
    return <div className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        {icon}
        <p> {text}</p>
</div>
}

const Subscribe = () => { 
    return <div className='flex flex-col justify-center'>
        <input 
            type='text'
            className='bg-transparent border px-4 py-2 text-sm'
            placeholder='e-mail' />
        <button
            className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black '>
                Subscribe
        </button>
    </div>
}
 
export default Footer