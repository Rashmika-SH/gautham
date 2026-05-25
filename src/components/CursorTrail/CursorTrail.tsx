import { useEffect } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const createStar = (x: number, y: number) => {
      const star = document.createElement('div');
      star.className = 'cursor-star';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      // Random size - made bigger for more visibility
      const size = Math.random() * 6 + 4; // Changed from 4+2 to 6+4 (4-10px instead of 2-6px)
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      document.body.appendChild(star);
      
      // Remove after animation
      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    let lastX = 0;
    let lastY = 0;
    let throttleTimer: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );

      // Only create stars if mouse moved enough
      if (distance > 20) {
        if (!throttleTimer) {
          createStar(e.clientX, e.clientY);
          lastX = e.clientX;
          lastY = e.clientY;
          
          throttleTimer = setTimeout(() => {
            throttleTimer = null;
          }, 50);
        }
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createStar(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouch);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return null;
};

export default CursorTrail;
