import React, { useState } from "react";
import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: boolean | any;
}

const MobileNav: React.FC<Props> = ({ open, setOpen }) => (
  <div
    className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${
      open ? "-translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out filter `}
  >
    <div className='flex items-center justify-center filter bg-white'>
      {" "}
      {/* <a className='text-xl font-semibold' href='/'>
        LOGO
      </a> */}
    </div>
    <div className='flex flex-col ml-4 mt-20'>
      <a
        className='text-3xl font-normal my-4'
        href='/'
        onClick={() =>
          setTimeout(() => {
            setOpen(!open);
          }, 100)
        }
      >
        Home
      </a>
      <a
        className='text-3xl font-normal my-4'
        href='/projects'
        onClick={() =>
          setTimeout(() => {
            setOpen(!open);
          }, 100)
        }
      >
        Projects
      </a>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex filter justify-center drop-shadow-md bg-black text-white md:px-10 px-5 py-4 items-center z-50'>
      <MobileNav open={open} setOpen={setOpen} />
      {/* <div className='w-3/12 flex items-center z-50'>
        <a className='text-2xl font-semibold' href='/'></a>
      </div> */}
      <div className='w-9/12 flex justify-center items-center'>
        <div
          className='z-50 flex relative w-8 flex-col justify-between items-center md:hidden'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={` h-0.5 w-5 bg-white rounded-lg transform transition duration-300 ease-in-out mt-3 ${
              open ? "rotate-45 translate-y-3.5 w-7" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out mt-3 ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white rounded-lg transform transition duration-300 ease-in-out mt-3 ${
              open ? "-rotate-45 -translate-y-3.5 w-7" : ""
            }`}
          />
        </div>

        <div className='hidden md:flex'>
          <Link href='/'>
            <a className=''>Home</a>
          </Link>
          <Link href='/projects'>
            <a className='mx-10'>Projects</a>
          </Link>
          {/* <a href='/contact'>Contact</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
