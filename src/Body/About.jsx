import React from 'react'

import TopBar from './TopBar';
import TopBarMobile from './Topbar-mobile';

const About = ({device, showBack}) => {
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
                    <div>
                        
                    </div>
                </div>
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Achievements
                    </span>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nam quam laboriosam nisi quae ipsum sit aperiam laudantium maiores, provident quaerat corrupti sed beatae, rem ducimus magni accusantium soluta ullam.
                    </div>
                </div>
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Eucation
                    </span>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum distinctio, aspernatur illo eum odit eveniet pariatur earum ex, at veritatis sapiente omnis ad quos quia hic, repellendus aliquam praesentium?
                    </div>
                </div>                
                <div className="my-4">
                    <span className="magical-underline text-3xl font-bold">
                        Achievements
                    </span>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nam quam laboriosam nisi quae ipsum sit aperiam laudantium maiores, provident quaerat corrupti sed beatae, rem ducimus magni accusantium soluta ullam.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
