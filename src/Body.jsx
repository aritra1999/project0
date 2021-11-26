import React, { useState } from "react";

import { MdLabelImportantOutline } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";

import Home from './Body/Home';
import Project from './Body/Project';
import Article from "./Body/Articles";
import Resume from "./Body/Resume";
import NoConv from './Body/NoConv';

export default function Body() {    
    const [page, setPage] = useState(<NoConv/>);

    function showHome(){
        setPage(<Home/ >);
    }

    function showProject(){
        setPage(<Project/ >);
    }

    function showArticle(){
        setPage(<Article/ >);
    }

    function showResume(){
        setPage(<Resume/ >);
    }


    return (
        <div className="pt-20 flex w-full">
            <div className="w-600 h-full border-r border-gray-200 overflow-y-auto ">
                <div className="border-b border-gray-200 px-5 py-4 text-gray-700 hover:shadow-md hover:bg-gray-50" onClick={showHome}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Home
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Home page.
                    </div>
                    <div className="text-gray-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                </div>
                <div className="border-b border-gray-200 px-5 py-4 text-gray-700 hover:shadow-md hover:bg-gray-50" onClick={showProject}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Projects
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Projects page.
                    </div>
                    <div className="text-gray-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                    <div className="flex">
                        <div className="border border-gray-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Project 1.pdf
                        </div>
                        <div className="border border-gray-300 flex px-3 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            + 11
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 px-5 py-4 text-gray-700 hover:shadow-md hover:bg-gray-50"  onClick={showArticle}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Articles and Papers
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Articles and paers page.
                    </div>
                    <div className="text-gray-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                    <div className="flex">
                        <div className="border border-gray-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Paper 1.pdf
                        </div>
                        <div className="border border-gray-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            Article 1.pdf
                        </div>
                        <div className="border border-gray-300 flex px-3 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            + 3
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 px-5 py-4 text-gray-700 hover:shadow-md hover:bg-gray-50" onClick={showResume}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Resume
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is my resume.
                    </div>
                    <div className="text-gray-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                    <div className="flex">
                        <div className="border border-gray-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-gray-200 text-sm text-gray-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Resume.pdf
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 px-5 py-4 text-gray-700 hover:shadow-md hover:bg-gray-50">
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            About Me
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the About Me page.
                    </div>
                    <div className="text-gray-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto h-full w-full">
                {page}
            </div>
        </div>
    )
}
