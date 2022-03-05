import React from 'react'

import { MdLabelImportantOutline, MdKeyboardBackspace } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { HiReply } from "react-icons/hi";

export default function TopBar({title, showBack}) {
    return (
        <div>
            <div className="flex mx-4 px-2 pt-4 pb-4 justify-between border-b border-slate-200">
                <div className="flex items-center cursor-pointer" onClick={showBack}>
                    <MdKeyboardBackspace className="w-4 h-4 mr-2"/>
                    Back
                </div>
                <div className="flex space-x-6">
                    <div><BsStar className="h-5 w-5"/></div>
                    <div><HiReply className="h-5 w-5" /></div>
                    <BsPrinter className="h-5 w-5"/>
                </div>
            </div>
            <div className="px-6 py-4 w-full flex justify-between items-center">
                <div className="text-xl flex items-center">
                    {title}
                    <MdLabelImportantOutline className="ml-4 h-5 w-5"/>
                    <div className="ml-4 text-sm bg-slate-300 px-2 py-1 rounded-md">
                        Inbox
                    </div>
                </div>  
            </div>
            {/* <div className="px-8 pb-4 text-xs text-slate-600 ">Thursday, Nov 19, 3:18 PM</div> */}
            <div className="px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="h-10 w-10 bg-slate-300 rounded-full flex items-center justify-center mr-4">
                        <BiUser className="h-6 w-6"/>
                    </div>
                    <div className="text-sm">
                        <div>
                            <span className="text-slate-500"> aritra041999@gmail.com </span> - an eternity ago.
                        </div>
                        To Me
                    </div>
                </div>
            </div>
            
        </div>
    )
}
