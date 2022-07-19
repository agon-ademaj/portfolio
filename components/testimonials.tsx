import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className='bg-black text-white py-10 lg:py-20'>
    <CarouselItem index={0}>
      <Review by='Kathryn Barrett'>
        Falling in love with code means falling in love with problem solving and
        being a part of a forever ongoing conversation.
      </Review>
    </CarouselItem>

    <CarouselItem index={1}>
      <Review by='Linus Torvalds'>
        Good programmers do programming not because they expect to get paid or
        get adulation by the public, but because it is fun.
      </Review>
    </CarouselItem>

    <CarouselItem index={2}>
      <Review by='Patio11'>
        Every great developer you know got there by solving problems they were
        unqualified to solve until they actually did it.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
