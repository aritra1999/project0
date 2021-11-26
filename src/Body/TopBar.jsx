import React from 'react'

import { MdLabelImportantOutline } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiReply } from "react-icons/hi";
import { IoReturnUpForwardOutline, IoReturnDownForward } from "react-icons/io5";

export default function TopBar({title}) {
    
    return (
        <div>
            <div className="pl-16 pr-12 py-4 w-full flex justify-between items-center">
                <div className="text-xl flex items-center">
                    {title}
                    <MdLabelImportantOutline className="ml-4 h-5 w-5"/>
                    <div className="ml-4 text-sm bg-gray-300 px-2 py-1 rounded-md">
                        Inbox
                    </div>
                </div>
                <div className="h-12 w-12 rounded-full hover:bg-gray-100 flex items-center justify-center">
                    <BsPrinter className="h-5 w-5"/>
                </div>
            </div>
            <div className="px-16 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center mr-6">
                        <BiUser className="h-6 w-6"/>
                    </div>
                    <div className="text-sm">
                        <div>
                            Aritra Mondal - <span className="text-gray-500"> aritra041999@gmail.com </span>
                        </div>
                        To Me
                    </div>
                </div>
                <div className="text-gray-600 flex space-x-8 text-xs items-center">
                    <div>Thursday, Nov 19, 3:18 PM</div>
                    <div><BsStar className="h-5 w-5"/></div>
                    <div><HiReply className="h-5 w-5" /></div>
                </div>
            </div>
            <div className="fixed bottom-4 right-20 flex space-x-6">
                <div className="px-4 py-2 border border-gray-300 bg-white text-gray-500 rounded-md flex items-center">
                    <IoReturnDownForward className="mr-4 transform rotate-180" />
                    Reply
                </div>
                <div className="px-4 py-2 border border-gray-300 bg-white text-gray-500 rounded-md flex items-center">
                    <IoReturnUpForwardOutline className="mr-4 filter " />
                    Forward
                </div>
            </div> 
        </div>
    )
}
