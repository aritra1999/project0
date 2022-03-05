import React from 'react';
import {HiArrowRight} from 'react-icons/hi';

const AboutCard = ({name, logo, url, role, duration, description}) => {
    return (
        <div className="bg-slate-50 shadow-sm rounded-lg p-6 mb-6">
            <div className="text-xl font-bold flex items-center mb-4">
                <img classname="h-6" src={logo} alt={name}/>
                {/* {name} */}
            </div>
            <div className="text-sm my-2">{role}, <span className="italic"> {duration} </span></div>
            <div className="text-sm text-slate-700">
                <ul className="pl-6 list-disc list-outside">
                    { description.map((des, index) => <li> {des} </li> ) }
                </ul>
            </div>
            <a href={url} className="mt-4 text-xs flex font-bold rounded-full bg-blue-100 px-4  py-2 w-max text-blue-500">
                Visit Site
                <HiArrowRight className="ml-2 h-3 w-3 pt-0.5"/>
            </a>
        </div>
    );
}

export default AboutCard;
