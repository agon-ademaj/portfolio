import React, { useRef, useContext, useState, useCallback } from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto lg:text-4xl text-3xl tracking-tight'>
          <strong>Hi there, I'm Agon Ademaj</strong>, I work as frontend &
          backend developer creating thoughtful experiences. I always strive to
          achieve the highest standard possible, at any given task in any
          situation. I am accostumed to working in a challenging environment,
          particulary when dealing with multiple projects and priorities at the
          same time. <br></br> Programming has always been my passion and hobby
          since my early childhood. I learned to code on my own out of
          curiosity. <br></br> This curiosity helped me to stay up-to-date from
          year to year and I'm still learning every single day to ensure I can
          deliver the most modern and effective solutions. I believe in working
          hard and smart.
        </p>
      </div>
      <div className='container px-11 text-center mt-28 mx-auto'>
        <h2 className='font-bold'>What I do</h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-20'>
          <Member image='cubes' name='Product Design' />
          <Member image='system' name='Design Systems' />
          <Member image='coding' name='Development' />
          <Member image='prototyping' name='Prototyping' />
          <Member image='solving' name='Problem Solving' />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
