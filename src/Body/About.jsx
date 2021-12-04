import React from 'react'

import TopBar from './TopBar';
import TopBarMobile from './Topbar-mobile';
import AboutCard from './AboutCard.jsx';

import about from './about.json';

import mixpanel from 'mixpanel-browser';
mixpanel.init('2507d1aafd0d7404a0d276ca8d2de58e');

const About = ({device, showBack}) => {
    mixpanel.track('About');        
    return (
        <div className="h-full">
            {
                device === "mobile" ? <TopBarMobile title="Welcome to the About me page." showBack={showBack} /> : <TopBar title="Welcome to the About me page." />
            }
            <div className="h-full pb-10 pt-4 lg:px-16 md:px-6 px-6 ">
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Work Experience
                    </span>
                    <div className="lg:px-16 md:px-3 px-1 py-10">
                        {
                            about.experience.map((education, index) => 
                                <AboutCard
                                    name={education.name}
                                    logo={education.logo}
                                    url={education.url}
                                    role={education.role}
                                    duration={education.duration}
                                    description={education.description}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Achievements
                    </span>
                    <div className="p-4">
                        <ul className="pl-4 list-disc list-outside">
                            <li>4th place at <a className="underline" href="https://icpc.global/">ICPC 2018</a>  Asia-Gwalior Regionals. </li>
                            <li>7th place in <a className="underline" href="https://dsckiit.in/">DSC Garage India Hack</a>. </li>
                            <li>5* <a className="underline" href="https://www.hackerrank.com/">HackerRank</a>(Problem Solver).</li>
                            <li>Google Hash Code 2020, 7th in University.</li>
                            <li>Google Hash Code 2021 5th in University.</li>
                            <li>Google Code Jam 2020 world rank 6667.</li>
                            <li>One of the first 50 codebreakers in <a className="underline" href="https://breakthecode.tech/">BreakTheCode.</a> </li>
                            <li>DigitalOcean <a className="underline" href="https://hacktoberfest.digitalocean.com/">HacktoberFest 2020, 2021</a> opensource contributor.</li>
                        </ul>
                    </div>
                </div>
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Eucation
                    </span>
                    <div>
                        <div className="">

                        </div>
                    </div>
                </div>                
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Skills
                    </span>
                    <div className="p-4">
                        <ul className="pl-4 list-disc list-outside">
                            <li>C, C++, Python, Java, JavaScript, Typescript, SQL. </li>
                            <li>Django, NodeJS, ElectronJS, React JS, Next JS. </li>
                            <li>Git, CI/CD, AWS, Azure. UI/UX, Figma, Docker, Wireframing. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
