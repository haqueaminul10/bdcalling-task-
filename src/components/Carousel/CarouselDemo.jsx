import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const DemoCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative'>
      <Carousel className='my-20'>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className={`transition-transform duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className='flex gap-16 mx-32 items-center'>{item}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Navigation */}
      <div className='flex justify-center mt-4'>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-[#729842]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoCarousel;
