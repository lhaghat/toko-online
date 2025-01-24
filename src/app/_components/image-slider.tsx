// image-slider.tsx
'use client'
import React, { useState, useRef } from 'react';
import Item from "@/app/_components/item"

interface Slide {
    id: string;
    thumbnail_image: string;
    name: string;
  }

const ImageSlider = ({ data }: { data: Slide[] }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);


   // Start drag or touch
  const handleStart = (e: MouseEvent | TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      const startPos = e.type === 'touchstart' 
        ? (e as TouchEvent).touches[0].pageX 
        : (e as MouseEvent).pageX;
      setStartX(startPos - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  // Stop drag or touch
  const handleEnd = () => {
    setIsDragging(false);
  };

// Move drag or touch
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    
    const movePos = e.type === 'touchmove' 
      ? (e as TouchEvent).touches[0].pageX 
      : (e as MouseEvent).pageX;
    
    const x = movePos - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="image-slider">
       <div
        ref={sliderRef}
        className="slider-container"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          overflowX: 'hidden',
          display: 'flex',
        }}
      >
        {data.map((item: { thumbnail_image: string; name: string }, index: number) => (
          <Item key={index} product={item} />   
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;