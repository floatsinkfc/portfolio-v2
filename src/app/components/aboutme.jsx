import Image from 'next/image';
import aboutImg from '../img/aboutBackground.png'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className='w-screen flex min-h-[300px] justify-center ' >
      
      <div className='w-full'>
        <motion.div 
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: -20  }}
        transition={{ duration: 1, delay: 0.25}}
        viewport={{ once: true, amount: 0.5  }}
        className='flex text-center justify-center lg:flex-row flex-col lg:px-0 px-[20%] lg:absolute lg:right-[5%] w-full lg:w-auto'>
          <h1 className='lg:border-l-[3px] lg:border-b-0 border-b-[3px] border-black font-inked leading-[44px] lg:w-[26px]  text-[40px] break-words lg:h-[230px]'>About</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25}}
        viewport={{ once: true, amount: 0.5  }} 
        className=' text-left flex-wrap items-center lg:grid lg:grid-cols-2 flex px-[20%] ' >
          <div className='flex flex-col w-full h-full justify-center items-center'>
            <Image src={aboutImg} alt='' className='object-cover w-[300px] h-[300px]'></Image>
          </div>
          <div className=''>
            <h1 className=' font-inked text-4xl'>I am Software Engineer</h1>
            <p className=' font-caros text-[#828282] '>Passionate CS student at the University of Illinois at Chicago (UIC) with a keen interest in web development. Eager to transform innovative ideas into dynamic and user-friendly websites. Proficient in a range of programming languages and frameworks, I am dedicated to mastering the art of creating seamless online experiences. Fueled by a desire to contribute to the ever-evolving digital landscape, my goal is to become a skilled website developer, combining technical expertise with creative solutions to build the next generation of engaging and functional websites.</p>
          </div>
        </motion.div>
        
      </div>
      
    </div>
  );
};

export default AboutMe;
