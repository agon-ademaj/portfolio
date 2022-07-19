import React from "react";
import Logos from "./logos";
import Testimonials from "./testimonials";
import s from "../styles/trustedby.module.css";

const TrustetBy: React.FC = () => (
  <section
    className={`bg-white flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}
  >
    <div className='flex-1'></div>
    <div className='flex flex-col justify-center items-center'>
      <h3 className='text-xl mb-10 font-bold text-center'>
        <span className='whitespace-nowrap text-3xl'>Development Skills</span>
      </h3>
      <Logos />
    </div>
    <Testimonials />
    <div className='flex-1 bg-black'></div>
  </section>
);

export default TrustetBy;
