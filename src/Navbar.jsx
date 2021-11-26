import { SiGmail } from 'react-icons/si';
import { IoSearch } from 'react-icons/io5';
import { FiSettings } from "react-icons/fi";

function Navbar(){
    return (
        <div className="z-40 flex h-20 justify-between items-center px-8 border-b border-gray-200 fixed w-screen bg-white">
            <div className="flex items-center text-gray-800 font-semibold">  
                <SiGmail className="h-7 w-7 mr-2 text-red-600" /> MyMail
            </div>
            <div className="bg-gray-100 py-3 px-4 w-1/3 rounded-lg text-gray-600 text-sm flex justify-between items-center"> 
                <input type="search" name="name" placeholder="Search all conversations" className="bg-gray-100 w-full p-1 mx-2" />
                <IoSearch className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex space-x-6 items-center"> 
                <div className="flex h-10 px-6 rounded-full border border-gray-200 text-gray-800 text-sm hover:bg-gray-100 justify-center items-center"> 
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-3"></div>
                    Active
                </div>
                <div className="p-4 hover:bg-gray-100 rounded-full"> 
                    <FiSettings className="h-6 w-6 text-gray-500"/>
                </div>
                <div>
                    <img src="./navbar-user.jpg" className="h-12 w-12 object-cover rounded-full" alt="User" /> 
                </div> 
            </div>
        </div>
    );
}

export default Navbar;