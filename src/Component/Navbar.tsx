import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-text.png"
import { useState } from "react";

const Navbar = () => {

    const [menu, setmenu] = useState(false);

    const handlemenu = ()=>{
        setmenu(!menu)
    }

    return (
        <>
        <div className="bg-[#F1F5F9]">

        <div className="grid grid-cols-3 container mx-auto items-center py-3 px-4 gap-4 relative">
            <div className="block lg:hidden">
                <i onClick={handlemenu}><FaBars /></i>
            </div>
            <div className="">
                <img src={logo} alt="" />
            </div>
            {menu === true ? <div className="block absolute top-15 left-0 lg:static"> 
                <ul className="lg:flex lg:justify-between">
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] text-[#DB2777] hover:text-[#475569]">Home</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Technologies</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Projects</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">About</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Contact</a></li>
                </ul>
            </div> : <div className="hidden lg:block"> 
                <ul className="lg:flex lg:justify-between">
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] text-[#DB2777] hover:text-[#475569]">Home</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Technologies</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Projects</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">About</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Contact</a></li>
                </ul>
            </div>}
            
            <div className="flex justify-end">
                <button className="bg-[#FFFFFF] hover:bg-[#DB2777] hover:text-[#FFFFFF] py-1 px-3 md:py-2 md:px-6 rounded-3xl">Sign In</button>
                <button className="hover:bg-[#FFFFFF] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-1 px-3 md:py-2 md:px-6 rounded-3xl">Sign Up</button>
            </div>
        </div>

        </div>
        </>
    );
};

export default Navbar;