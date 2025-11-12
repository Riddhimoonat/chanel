'use client';
import React, { useReducer, useEffect } from 'react';
import './RippleCursor.css';


// Reducer to manage ripples
const rippleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RIPPLE':
      return [...state, action.payload].slice(-25); // keep last 25 ripples
    case 'REMOVE_RIPPLE':
      return state.filter((ripple) => ripple.id !== action.payload);
    default:
      return state;
  }
};

const RippleCursor = ({
  maxSize = 70,      // ripple size
  duration = 1000,   // fade-out time
  blur = true,       // soft glow blur
  color = '#fffff', // default black (for white background)
}) => {
  const [ripples, dispatch] = useReducer(rippleReducer, []);

  // Add ripple on mouse move
  const handleMouseMove = (e) => {
    const ripple = {
      id: `${Date.now()}-${Math.random()}`,
      x: e.clientX,
      y: e.clientY,
    };
    dispatch({ type: 'ADD_RIPPLE', payload: ripple });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
    }, duration);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [duration]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-[9999]">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full animate-ripple"
          style={{
  left: `${ripple.x - maxSize / 2}px`,
  top: `${ripple.y - maxSize / 2}px`,
  width: `${maxSize}px`,
  height: `${maxSize}px`,
  backgroundColor: color,
  opacity: 0.4, // slightly more visible
  boxShadow: `0 0 25px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)`,
  filter: blur ? 'blur(6px)' : 'none',
  animationDuration: `${duration}ms`,
  mixBlendMode: 'screen',
}}
        />
      ))}
    </div>
  );
};

export default RippleCursor;
