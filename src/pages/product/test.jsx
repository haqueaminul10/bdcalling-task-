import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function CarouselDemo() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalItems = 5;

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='w-full max-w-xs relative'>
      <Carousel className='w-full'>
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {Array.from({ length: totalItems }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Navigation */}
      <div className='flex justify-center mt-4 space-x-2'>
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
