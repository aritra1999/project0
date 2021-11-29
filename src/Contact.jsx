import React from 'react';
import { IoSend } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { BiPencil } from "react-icons/bi";

const Contact = () => {
    const [sendMessage, setsendMessage] = React.useState(false);
    return (
        <div>
            <div className="fixed bottom-4 -right-8 z-30">
                <button className="border border-gray-200 bg-white text-indigo-600 hover:shadow-md py-4 pl-4 pr-6 rounded-full flex items-center font-semibold" onClick={() => setsendMessage(true)}>
                    <BiPencil className="mr-4 h-6 w-6 font-bold transform -rotate-6" />
                </button>
            </div>
            { sendMessage ? (
            <div className="fixed right-0 bottom-0 z-50 w-full bg-white rounded-t-lg">
                <div className="flex justify-between py-3 px-6 bg-gray-800 text-white rounded-t-lg text-sm items-center">
                    <div>Contact Me</div>
                    <div className="cursor-pointer" onClick={() => setsendMessage(false)}>
                        <MdClose  className="h-4 w-4 cursor-pointer" />
                    </div>
                </div>
                <div className="px-4 pb-2 mt-3">
                    <input type="text" className="border-b border-gray-200 bg-transparent w-full p-1 pb-2 text-sm" placeholder="From" />
                </div>
                <div className="px-4 pb-2">
                    <input type="text" className="border-b border-gray-200 bg-transparent w-full p-1 pb-2 text-sm" placeholder="Subject" />
                </div>
                <div className="px-4 pb-3">
                    <textarea name="message" id="message" className="w-full h-72 overflow-y-scroll bg-transparent text-sm resize-none p-1" placeholder="Message"></textarea>
                </div>
                <button className="m-3 px-6 py-2 bg-blue-600 rounded-md text-white flex items-center ml-auto bottom-0">
                    Send
                    <IoSend className="h-4 w-4 ml-2"/>
                </button>
            </div>
            ) : null}
        </div>
    );
}

export default Contact;
