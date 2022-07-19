import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
}

const Member: React.FC<Props> = ({ image, name }) => (
  <div className='px-11 mt-10 mx-auto'>
    <Image
      src={`/assets/process/${image}.png`}
      alt={name}
      width={128}
      height={128}
    />
    <strong className='text-2xl xl:text-3xl block'>{name}</strong>
  </div>
);

export default Member;
