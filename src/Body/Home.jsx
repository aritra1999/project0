import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa";

import TopBar from './TopBar';
import TopBarMobile from './Topbar-mobile';

import mixpanel from 'mixpanel-browser';
mixpanel.init('2507d1aafd0d7404a0d276ca8d2de58e');

export default function Home({device, showBack}) {
    mixpanel.track('Home');
    return (
        <div className="h-full">
            {
                device === "mobile" ? <TopBarMobile title="Welcome to my Home page." showBack={showBack} /> : <TopBar title="Welcome to my Home page." />
            }
            <div className="flex md:flex-row flex-col-reverse h-full -mt-32">
                <div className="flex items-center justify-center sm:h-full h-1/2 sm:w-1/2 w-full">
                    <div className="section px-10">
                        <div className="mb-2">Hi, I'm Aritra Mondal.</div>
                        <div className="sm:text-7xl text-5xl text-gray-800 font-extrabold space-y-4 mt-auto">
                            <span className="magical-underline">Developer. </span>
                            <span className="magical-underline">Designer. </span>
                            <span className="magical-underline">Gamer. </span>
                        </div>
                        <div className="mt-12 text-gray-800 ml-2 flex sm:space-x-10 h-16 space-x-8 flex-row text-2xl sm:text-3xl mb-auto">
                            <a target="_blank" rel="noreferrer" href="mailto:1806290@kiit.ac.in"><IoMdMail className="w-6 h-6"/></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/aritra1999"><FaGithub className="w-6 h-6"/></a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/aritramondal199"><FaTwitter className="w-6 h-6"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/__aritra_mondal__/"><FaInstagram className="w-6 h-6"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aritra1999/"><FaLinkedin className="w-6 h-6" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCaOZb2OH84nCezEt9gnKy-Q"><FaYoutube className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:p-0 sm:mt-auto sm:mb-auto mt-10 px-16 w-full">
                    <img src={process.env.PUBLIC_URL + '/images/me2.png'} className="w-11/12 mx-auto" alt="me" style={{ borderRadius: "50px 50px 0 50px" }} />
                </div>
            </div>

        </div>
    )
}
