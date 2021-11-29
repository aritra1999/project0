import React from 'react'

import TopBar from './TopBar';
import TopBarMobile from './Topbar-mobile';

import ProjectArticleCard from './ProjectArticleCard';
import projects from './projects.json';

export default function Projects({device, showBack}) {
    
    return (
        <div className="h-full">
            {
                device === "mobile" ? <TopBarMobile title="Welcome to the Project page." showBack={showBack} /> : <TopBar title="Welcome to the Project page." />
            }
            
            <div className="lg:px-16 md:px-6 px-6 py-10 mx-auto max-w-screen">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:col-span-1 gap-6">
                    {
                        projects.map((project, index) => <ProjectArticleCard
                            key={index}
                            thumbnail={project.thumbnail}
                            title={project.title}
                            description={project.description}
                            links={project.links}
                            tags={project.tags}
                            ongoing={project.ongoing}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}
