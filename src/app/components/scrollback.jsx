import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import scrollImage from '../img/backtotop.png'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 z-[999]`}
      onClick={scrollToTop}
    >
      <Image src={scrollImage} alt='' className='w-[50px] h-[50px] z-[999]'></Image>
    </button>
  );
};

export default ScrollToTopButton;
