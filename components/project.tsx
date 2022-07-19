import React from "react";
import ProjectItem from "./project-item";

const Project: React.FC = () => {
  return (
    <section className={` bg-white py-20 text-3xl md:text-4xl`}>
      <div className='px-11 text-center mt-28 '>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 lg:gap-20'>
          <ProjectItem
            image='linkedin'
            name='LinkedIn Clone'
            content='LinkedIn clone is a clone of professional networking site.'
            technology='React JS, Firebase'
            link='test'
          />
          <ProjectItem
            image='ecommerce'
            name='E-commerce'
            content='An e-commerce site for purchasing technological equipment.'
            technology='React JS, ASP Net WEB API, SQL'
            link='test'
          />
          <ProjectItem
            image='crypto'
            name='Coinbase Blockchain'
            content='A cryptocurrency trading platform that offers users the ability to buy, sell, and exchange.'
            technology='Next JS, Node.js, API Integration'
            link='test'
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
