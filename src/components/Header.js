import React from "react"
import AppLogo from "./AppLogo";

const Header = () => { 
    return (
        <header className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <AppLogo/>
                <div className="flex items-center gap-8"> 
                    <List/>
                    <CartItem/>
                    <UserLogo/>
                 </div>
            </div>
        </header>
    )
}
export default Header


const List = () => (
    <ul className="flex items-center gap-8">
        <ListItem title="Home"/>
        <ListItem title="Page"/>
        <ListItem title="Shop"/>
        <ListItem title="Element"/>
        <ListItem title="Blog"/>
    </ul>
);

const ListItem = ({ title }) => (
    <li className="text-base text-black font-bold hover:text-primary hover:underline underline-offset-4 decoration-[1px] cursor-pointer duration-300">
        {title}
    </li>
);

const CartItem = () => { 
    return (
        <div className="relative"> 
            <img className="w-8 font-bold" src="/assets/cart.png" alt="Cart Image" />
            <span 
            className="absolute w-6 top-2.5 left-1 text-sm flex items-center justify-center font-semibold pointer-events-none">
                0
            </span>
        </div>
    )
}

const UserLogo = () => { 
    return (
        <div className="relative"> 
            <img className="w-8 rounded-full" src="/assets/user_logo.png" alt="User logo" />
        </div>
    )
}
