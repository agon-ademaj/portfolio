import React, { useContext, useRef } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      ref={refContainer}
      className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 bg-black'
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute w-full h-full object-cover blur-sm'
      >
        <source src='/assets/typing.mp4' type='video/mp4' />
        <source src='/assets/typing.webm' type='video/webm' />
      </video>
      {/* Logo here */}
      {/* <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 z-10 text-4xl text-white font-bold`}
      >
        A
      </div> */}
      <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0, 0, 0, 0.4)] text-center flex-1 flex items-center justify-center flex-col'>
        <h1 className='mb-6 text-4xl xl:text-7xl'>Agon Ademaj</h1>
        <h2 className='mb-2 text-2xl xl:text-4xl trackin-tight'>
          <span>Web Development,</span> <span>done right.</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
