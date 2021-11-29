import { SiGmail } from 'react-icons/si';

function Navbar(){
    return (
        <div className="z-40 flex justify-between items-center p-3 border-b border-gray-200 fixed w-screen bg-white">
            <div className="bg-gray-100 py-3 px-4 w-full rounded-lg text-gray-600 text-sm flex justify-between items-center"> 
                <div className="flex items-center text-gray-800 font-semibold">  
                    <SiGmail className="h-5 w-5 mr-2 text-red-600" />
                </div>
                <input type="search" name="name" placeholder="Search all conversations" className="bg-gray-100 w-full p-1 mx-2" />
                
                <div className="flex items-center h-8 w-10"> 
                    <img src={process.env.PUBLIC_URL + '/images/navbar-user.jpg'} className="h-8 w-10 object-cover rounded-full" alt="User" /> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;