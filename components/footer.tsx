import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className='flex gap-8 items-center justify-center bg-black text-white p-20'>
    <Link href='https://cv.linkedin.com/in/agon-ademaj-1454011b6'>
      LinkedIn
    </Link>
    <Link href='https://www.facebook.com/agon.ademaj.336'>Facebook</Link>
    <Link href='https://www.instagram.com/agonnademaj/'>Instagram</Link>
  </footer>
);

export default Footer;
