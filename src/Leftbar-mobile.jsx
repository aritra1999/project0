import React from 'react'
import { BiAlarmSnooze, BiPencil, BiSend, BiTrash } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { GoInbox } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { MdClose, MdLabelImportantOutline } from "react-icons/md";
import { RiDraftLine, RiSpam2Line } from "react-icons/ri";

function Sidebar(){
    const [sendMessage, setsendMessage] = React.useState(false);
    return (
        <div className="h-screen pt-20 bg-white z-30">
            <div className="border-r border-slate-200 h-full pr-1">
                <div className="pl-1 py-4">
                    <button className="border border-slate-200 text-indigo-600 hover:shadow-md py-4 px-4 rounded-full flex items-center font-semibold" onClick={() => setsendMessage(true)}>
                        <BiPencil className="h-4 w-4 font-bold transform -rotate-6" />
                    </button>
                </div>
                <div className="flex items-center bg-indigo-100 text-indigo-700 rounded-r-full py-2 text-sm pl-3 pr-3 font-medium">
                    <div className="flex">
                        <GoInbox className="h-5 w-5 mr-1" />
                    </div>
                    <div>
                        6
                    </div>
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <BsStar  className="h-5 w-5" />
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <BiAlarmSnooze className="h-5 w-5"/>
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <BiSend className="h-5 w-5"/>
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <MdLabelImportantOutline className="h-5 w-5"/>
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <RiDraftLine className="h-5 w-5"/>
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <RiSpam2Line className="h-5 w-5"/>
                    
                </div>
                <div className="w-full flex items-center hover:bg-slate-100  text-slate-700 rounded-r-full py-2 text-sm px-4 font-medium">
                    <BiTrash className="h-5 w-5"/>
                    
                </div>
                <hr className="ml-2"/>
            </div>

            { sendMessage ? (
            <div className="fixed right-20 bottom-0 z-50 w-1/3 bg-white border border-slate-200">
                <div className="flex justify-between py-3 px-6 bg-slate-800 text-white rounded-t-lg text-sm items-center">
                    <div>New Message</div>
                    <div className="cursor-pointer" onClick={() => setsendMessage(false)}>
                        <MdClose  className="h-4 w-4 cursor-pointer" />
                    </div>
                </div>
                <div className="px-4 pb-2 mt-3">
                    <input type="text" className="border-b border-slate-200 bg-transparent w-full p-1 pb-2 text-sm" placeholder="From" />
                </div>
                <div className="px-4 pb-2">
                    <input type="text" className="border-b border-slate-200 bg-transparent w-full p-1 pb-2 text-sm" placeholder="Subject" />
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

export default Sidebar;