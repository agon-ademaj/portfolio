import React from "react";
import Image from "next/image";
import ProjectItem from "./project-item";

const ProjectHead: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center sticky -z-10 bg-white py-20'>
      <Image
        src='/assets/projects.jpg'
        alt='projects'
        layout='fill'
        className='object-cover'
      />
      <div className='p-20 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0, 0, 0, 0.4)] flex-1 flex flex-col items-center justify-center'>
        <h1 className='mb-6 text-4xl xl:text-7xl'>Projects</h1>
      </div>
    </div>
  );
};

export default ProjectHead;
