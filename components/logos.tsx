import React, { useRef, useContext } from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const Logos: React.FC = () => (
  <>
    <SliderContainer className='' contentWidth={1920} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src='/skills/react.png'
          width={250}
          height={120}
          alt='ReactJS'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/next.png'
          width={250}
          height={120}
          alt='NextJS'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/javascript.png'
          width={250}
          height={120}
          alt='JavaScript'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/java.png'
          width={250}
          height={120}
          alt='Java'
          objectFit='contain'
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className='mt-20' contentWidth={1920} initialOffsetX={0}>
      <SliderItem width={250}>
        <Image
          src='/skills/net.png'
          width={250}
          height={120}
          alt='AspNet'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/csharp.png'
          width={250}
          height={120}
          alt='CSharp'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/php.png'
          width={250}
          height={120}
          alt='AspNet'
          objectFit='contain'
        />
      </SliderItem>

      <SliderItem width={250}>
        <Image
          src='/skills/typescript.png'
          width={250}
          height={120}
          alt='Typescript'
          objectFit='contain'
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default Logos;
