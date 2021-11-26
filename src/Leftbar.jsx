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
        <div className="w-80 h-screen pt-20 bg-white z-30">
            <div className="border-r border-gray-200 h-full pr-4">
                <div className="pl-4 py-4">
                    <button className="border border-gray-200 text-indigo-600 hover:shadow-md py-4 pl-4 pr-6 rounded-full flex items-center font-semibold" onClick={() => setsendMessage(true)}>
                        <BiPencil className="mr-4 h-6 w-6 font-bold transform -rotate-6" />
                        Contect Me
                    </button>
                </div>
                <div className="w-full flex items-center justify-between bg-indigo-100 text-indigo-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <div className="flex">
                        <GoInbox className="h-5 w-5 mr-3" />
                        Inbox
                    </div>
                    <div>
                        6
                    </div>
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <BsStar  className="h-5 w-5 mr-3" />
                    Starred
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <BiAlarmSnooze className="h-5 w-5 mr-3"/>
                    Snoozed
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <BiSend className="h-5 w-5 mr-3"/>
                    Sent
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <MdLabelImportantOutline className="h-5 w-5 mr-3"/>
                    Important
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <RiDraftLine className="h-5 w-5 mr-3"/>
                    Drafts
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <RiSpam2Line className="h-5 w-5 mr-3"/>
                    Spam
                </div>
                <div className="w-full flex items-center hover:bg-gray-100  text-gray-700 rounded-r-full py-2 text-sm px-6 font-medium">
                    <BiTrash className="h-5 w-5 mr-3"/>
                    Trash
                </div>
                <hr className="ml-2"/>
            </div>

            { sendMessage ? (
            <div className="fixed right-20 bottom-0 z-50 w-1/3 bg-white border border-gray-200">
                <div className="flex justify-between py-3 px-6 bg-gray-800 text-white rounded-t-lg text-sm items-center">
                    <div>New Message</div>
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

export default Sidebar;