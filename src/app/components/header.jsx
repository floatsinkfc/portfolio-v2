import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import headerbackground from '../img/headerbackground.png';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    controls.start(isMenuOpen ? 'closed' : 'open');
  };

  return (
    <div className="w-screen h-[100px] absolute z-30 overflow-hidden">
      <div className="w-screen h-[70px] flex items-center px-[10%] justify-between">
        <h1 className="text-white font-darkline text-[30px] font-normal">ZW</h1>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white font-darkline text-[30px] font-normal"
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:flex gap-[67px]">
          <Link href="/" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Home</Link>
          <Link href="#about" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">About</Link>
          <Link href="#projects" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Projects</Link>
          <Link href="#contact" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={controls}
        variants={{
          open: { x: 0},
          closed: { x: '100%' },
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed z-[999] top-0 right-0 h-screen w-screen bg-black text-white`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Link href="/" onClick={toggleMenu} className="text-[30px] font-normal mb-6">
            Home
          </Link>
          <Link href="#about" onClick={toggleMenu} className="text-[30px] font-normal mb-6">
            About
          </Link>
          <Link href="#projects" onClick={toggleMenu} className="text-[30px] font-normal mb-6">
            Projects
          </Link>
          <Link href="#contact" onClick={toggleMenu} className="text-[30px] font-normal mb-6">
            Contact
          </Link>

          <motion.button
            onClick={toggleMenu}
            className="text-[30px] font-normal mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
      <div className='w-full overflow-hidden'>
        <Image
        src={headerbackground}
        alt=""
        className=" -z-10 min-w-[2400px] h-[357px] top-[-150px] left-[-200px] absolute"
      />
      </div>
      
    </div>
  );
}
