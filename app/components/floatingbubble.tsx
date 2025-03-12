"use client";
import React, { useEffect, useState } from 'react';

interface FloatingBubblesProps {
  count?: number;
  scrollY?: number;
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({ 
  count = 15, 
  scrollY = 0 
}) => {
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    width: number;
    height: number;
    top: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
  }>>([]);
  
  useEffect(() => {
    // Generate random bubbles only on the client side
    // This prevents hydration mismatch errors
    const generatedBubbles = Array.from({ length: count }).map((_, index) => ({
      id: index,
      width: Math.random() * 10 + 5,
      height: Math.random() * 10 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 15,
      animationDelay: Math.random() * 5,
    }));
    
    setBubbles(generatedBubbles);
  }, [count]);

  return (
    <div className="absolute inset-0 z-1">
      {bubbles.map((bubble) => (
        <div 
          key={bubble.id}
          className="absolute rounded-full bg-green-500 opacity-20"
          style={{
            width: `${bubble.width}px`,
            height: `${bubble.height}px`,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            animation: `float ${bubble.animationDuration}s linear infinite`,
            animationDelay: `${bubble.animationDelay}s`,
            transform: `translateY(${scrollY * (Math.random() * 0.2)}px)`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-50px) translateX(30px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBubbles;