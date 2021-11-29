function ProjectArticleCard({key, thumbnail, title, description, links, tags, ongoing}){
    
    return (
        <div className="bg-white shadow-md hover:shadow-lg rounded-lg">
            <img className="rounded-t-lg object-cover w-full h-48" src={ process.env.PUBLIC_URL + `/images/${ thumbnail }`} alt="" /> 
            <div className="pt-6 px-6 pb-4">
                <div className="h-40">
                    <div className="mb-2">
                        <h3 className="text-lg font-semibold items-center">
                            { title }
                            { ongoing? 
                            <span className="px-2 py-0.5 ml-2 bg-yellow-100 text-yellow-600 rounded-full text-xs font-medium" >Ongoing</span> :
                            <span className="px-2 py-0.5 ml-2 bg-green-100 text-green-600 rounded-full text-xs font-medium">Finised</span> }
                        </h3>
                       
                    </div>
                    <p className="text-xs font-medium mb-2">
                        { description }
                    </p>
                    <div>
                        {
                            tags.map((tag, i) => 
                                <div className="px-2 mb-1 mr-2 inline-block py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600" key={i}>
                                    { tag }
                                </div>
                            )
                        } 
                    </div>   
                </div>
                <div className="flex justify-between px-2 mt-4 pt-4 space-x-8 mr-4 border-t border-gray-100">
                    {
                        links.map((link, i) => 
                            <div className="flex items-center rounded-md text-blue-900 font-medium text-xs" key={i}>
                                <a href={link.link} target="_blank" rel="noreferrer">{ link.type }</a>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        )    
                    }
                </div>
            </div>
            
        </div>
    );
}

export default ProjectArticleCard;