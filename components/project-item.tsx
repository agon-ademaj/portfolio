import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  content: string;
  technology: string;
  link: string;
}

const ProjectItem: React.FC<Props> = ({
  image,
  name,
  content,
  technology,
  link,
}) => (
  <div className='lg:p-4 md:w-full flex justify-center cursor-pointer'>
    <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg'>
      <Image className='w-full' src={`assets/projects/${image}.jpg`} />

      <div className='px-6 py-4 lg:h-52'>
        <div className='title-font text-2xl font-bold mb-2'>
          <p className='no-underline text-gray-900'>{name}</p>
        </div>

        <span className='tracking-widset text-xs title-font font-medium text-gray-400 mb-1'>
          {technology}
        </span>

        <p className='text-gray-700 text-base'>{content}</p>

        <div className='px-6 pt-2 pb-2 text-sm bg-black text-white px-4 py-2 inline-block font-semibold mr-2 mb-3 cursor-pointer tracking-widset rounded-full'>
          <button>Explore</button>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectItem;
