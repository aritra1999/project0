import React from 'react';
import {HiArrowRight} from 'react-icons/hi';

const AboutCard = ({name, logo, url, role, duration, description}) => {
    return (
        <div className="bg-gray-50 shadow-sm rounded-lg p-6 mb-6">
            <div className="text-xl font-bold flex items-center mb-4">
                <img classname="h-6" src={logo} alt={name}/>
                {/* {name} */}
            </div>
            <div className="text-sm my-2">{role}, <span className="italic"> {duration} </span></div>
            <div className="text-sm text-gray-700">
                <ul className="pl-6 list-disc list-outside">
                    { description.map((des, index) => <li> {des} </li> ) }
                </ul>
            </div>
            <a href={url} className="mt-4 text-xs flex border rounded-full bg-indigo-50 px-3 pb-0.5 pt-1 border-indigo-500 w-max text-indigo-500">
                Visit Site
                <HiArrowRight className="ml-2 h-3 w-3 pt-0.5"/>
            </a>
        </div>
    );
}

export default AboutCard;
