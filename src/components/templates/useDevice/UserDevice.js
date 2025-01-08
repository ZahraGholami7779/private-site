
"use client"
import { useEffect, useState } from 'react';

const UserDevice = () => {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      const handleTouchStart = (event) => {
        // Your touch event logic here
        console.log('Touch start:', event);
      };

      const handleTouchEnd = (event) => {
        // Your touch event logic here
        console.log('Touch end:', event);
      };

      // Attach touch event listeners
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);

      // Clean up the event listeners on component unmount
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile]);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsMobile(isMobile);
  }, [setIsMobile]);

  return null;
};

export default UserDevice;