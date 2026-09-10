import logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <>
        <div className="bg-[#F1F5F9]">

        <div className="grid grid-cols-3 container mx-auto items-center py-3 px-4">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div className=""> 
                <ul className="flex justify-between">
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] text-[#DB2777] hover:text-[#475569]">Home</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Technologies</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Projects</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">About</a></li>
                    <li><a href="#" className="font-jakarta font-semibold text-[14px] hover:text-[#DB2777] text-[#475569]">Contact</a></li>
                </ul>
            </div>
            <div className="text-end">
                <button className="bg-[#FFFFFF] hover:bg-[#DB2777] hover:text-[#FFFFFF] py-2 px-6 rounded-3xl">Sign In</button>
                <button className="hover:bg-[#FFFFFF] bg-[#DB2777] text-[#FFFFFF] hover:text-black py-2 px-6 rounded-3xl">Sign Up</button>
            </div>
        </div>

        </div>
        </>
    );
};

export default Navbar;