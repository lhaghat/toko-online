// image-slider.tsx
'use client'
import React, { useState, useRef } from 'react';
import Item from "@/app/_components/item"
import { Product } from '@/app/types/product';

interface Slide {
    id: string;
    thumbnail_image: string;
    name: string;
  }

interface ItemProps {
    product: Product
  }

const ImageSlider = ({ data }: { data: Slide[] }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);


   // Start drag or touch
   const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      const startPos = e.type === 'touchstart' 
      ? (e as React.TouchEvent<HTMLDivElement>).touches[0].pageX 
      : (e as React.MouseEvent<HTMLDivElement>).pageX;
      setStartX(startPos - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  // Stop drag or touch
  const handleEnd = () => {
    setIsDragging(false);
  };

// Move drag or touch
  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    
    const movePos = e.type === 'touchmove' 
      ? (e as React.TouchEvent<HTMLDivElement>).touches[0].pageX 
      : (e as React.MouseEvent<HTMLDivElement>).pageX;
    
    const x = movePos - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="image-slider">
       <div
        ref={sliderRef}
        className="slider-container"
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => handleStart(e)}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMove(e)}
        onMouseUp={(e: React.MouseEvent<HTMLDivElement>) => handleEnd()}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => handleEnd()}
        onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => handleStart(e)}
        onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => handleMove(e)}
        onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => handleEnd()}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          overflowX: 'hidden',
          display: 'flex',
        }}
      >
        {data.map((item: { thumbnail_image: string; name: string }, index: number) => (
          <Item key={index} product={item as unknown as Product} />   
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;