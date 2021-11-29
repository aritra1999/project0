import React from 'react'

import TopBar from './TopBar';
import TopBarMobile from './Topbar-mobile';

import { GrDocumentPdf } from "react-icons/gr";
import { MdClose } from "react-icons/md";

export default function Resume({device, showBack}) {
    const [showModal, setShowModal] = React.useState(false);
    
    return (
        <div className="h-full">
            {
                device === "mobile" ? <TopBarMobile title="This is the Projects Page." showBack={showBack} /> : <TopBar title="This is the Projects Page." />
            }
            
            <div className="lg:px-16 md:px-6 px-6 py-10 mx-auto max-w-screen text-sm">
                <div className="mb-6"> To Whom It May Concern, </div> 
                <div className="mb-6">I'm Aritra Mondal, a final year Information Technology student at Kalinga Institute of Industrial Technology. Here's my resume. </div>
                With regards, <br />
                Aritra Mondal 
                <hr className="my-10"/>
                <div>
                    <div className="h-40 w-72 bo bg-gray-100 mt-10 py-3 px-4 rounded-md text-gray-500 flex items-center justify-center cursor-pointer" onClick={() => setShowModal(true)}>
                        <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                        Resume.pdf
                    </div>
                    {showModal ? (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-center justify-between py-3 px-6 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-lg font-semibold">Resume.pdf</h3>
                                            <MdClose  className="h-5 w-5 cursor-pointer" onClick={() => setShowModal(false)}/>
                                        </div>
                                        {/*body*/}
                                        <div className="relative flex-auto">
                                            <embed src="/resume.pdf" className="rounded-b-lg" width="1100px" height="900px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
                        </>
                    ) : null}
                </div>
                <div className="my-6">
                    Problem? 
                    <a href="https://drive.google.com/file/d/1FXpfzLEMVNcQdRA5zZ9vPTuVKWikjgK_/view?usp=sharing" target="_blank" rel="noreferrer" className="ml-2 underline">
                        Open here
                    </a>
                </div>
            </div>
        </div>
    )
}
