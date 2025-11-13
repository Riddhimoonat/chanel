// 'use client';
// import React, { useReducer, useEffect, useState } from 'react';
// import './RippleCursor.css';

// const rippleReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_RIPPLE':
//       return [...state, action.payload].slice(-25);
//     case 'REMOVE_RIPPLE':
//       return state.filter((ripple) => ripple.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const RippleCursor = ({
//   maxSize = 70,
//   duration = 1000,
//   blur = true,
// }) => {
//   const [ripples, dispatch] = useReducer(rippleReducer, []);
//   const [color, setColor] = useState('#ffffff'); // default white

//   // 👇 Detect background brightness
//   const getBackgroundBrightness = (x, y) => {
//     const element = document.elementFromPoint(x, y);
//     if (!element) return 255;
//     const bg = window.getComputedStyle(element).backgroundColor;
//     const rgb = bg.match(/\d+/g);
//     if (!rgb) return 255;
//     const brightness =
//       0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
//     return brightness;
//   };

//   const handleMouseMove = (e) => {
//     const brightness = getBackgroundBrightness(e.clientX, e.clientY);
//     // 👇 Dynamically switch cursor color
//     if (brightness > 180) setColor('#000000');
//     else setColor('#ffffff');

//     const ripple = {
//       id: `${Date.now()}-${Math.random()}`,
//       x: e.clientX,
//       y: e.clientY,
//     };
//     dispatch({ type: 'ADD_RIPPLE', payload: ripple });
//     setTimeout(() => {
//       dispatch({ type: 'REMOVE_RIPPLE', payload: ripple.id });
//     }, duration);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [duration]);

//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-[9999]">
//       {ripples.map((ripple) => (
//         <div
//           key={ripple.id}
//           className="absolute rounded-full animate-ripple"
//           style={{
//             left: `${ripple.x - maxSize / 2}px`,
//             top: `${ripple.y - maxSize / 2}px`,
//             width: `${maxSize}px`,
//             height: `${maxSize}px`,
//             backgroundColor: color,
//             opacity: 0.35,
//             boxShadow: `0 0 25px ${color}, 0 0 60px ${color}40`,
//             filter: blur ? 'blur(6px)' : 'none',
//             animationDuration: `${duration}ms`,
//             mixBlendMode: 'screen',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RippleCursor;
