import projects from '../projects.json';
import { useState } from 'react';
import { GoLinkExternal } from "react-icons/go"
;
// Dynamically get image from public folder
const getImagePath = (imageName) => `/projects/${imageName}`;

export default function Portofolio() {
    const [selectedImage,setSelectedImage] = useState(null);

    return (

        <div className="flex flex-col mt-[100px] justify-center items-center w-full min-h-screen text-center text-white px-4">
            <div className="flex flex-col justify-center items-center xl:w-[90vw]">
                
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-row justify-between items-center w-full mt-8 mb-4 border bg-[#0D1117]/90 backdrop-blur-md

 border-gray-800 rounded-lg shadow-lg p-5">
                        
                        <div className="flex-1 text-left me-[200px]">
                            <div className="xl:text-3xl font-bold">{project.title}</div>
                            <div className="xl:text-2xl font-semibold">{project.subtitle}</div>
                            <div className="xl:text-base xl:font-normal mt-3">{project.description}</div>
                            <div className="mt-3 xl:text-lg xl:font-medium text-gray-300">Tech: {project.tech.join(", ")}</div>
                            
                        </div>

                        <div className="flex-col justify-center">
                            <img 
                                src={getImagePath(project.image[0])} 
                                alt={project.title} 
                                className="max-w-sm w-full aspect-video object-cover cursor-pointer hover:scale-110 transition duration-200 rounded-lg shadow-md"
                                onClick={() => setSelectedImage(getImagePath(project.image[0]))}
                            />

                                {project.link && (
                                    <div className="mt-3 xl:text-base flex justify-center">
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-5 py-2 text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 
                                                    hover:from-cyan-500 mt-3 hover:to-blue-700 
                                                    shadow-lg rounded-full transition duration-300 transform hover:scale-105"
                                        >
                                            Go to Project <GoLinkExternal className="inline-block text-lg" />
                                        </a>
                                    </div>
                                )}
                            </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'
                    onClick={() => setSelectedImage(null)}
                >
                    <div className='relative'>
                        <img 
                            src={selectedImage} 
                            alt="Full Image" 
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                        <button
                            className="absolute top-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-full hover:bg-red-600"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✖  
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
