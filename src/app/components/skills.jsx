import skillsData from '../data/skills';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  return (
    <div className='w-screen flex min-h-[300px] justify-center' >
      
      <div className='flex justify-between flex-wrap mt-1'>
        <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0  }}
        transition={{ duration: 1, delay: 0.25}}
        viewport={{ once: true, amount: 0.5  }}
        className='flex text-center justify-center lg:flex-row flex-col lg:px-0 px-[20%] lg:absolute lg:left-[5%] w-full lg:w-auto'>
          <h1 className='lg:border-r-[3px] lg:border-b-0 border-b-[3px] border-black font-inked leading-[44px] lg:w-[26px] w-full text-[40px] break-words lg:h-[270px]'>Skills</h1>
          
        </motion.div>

        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25}}
        viewport={{ once: true, amount: 0.5  }}
        className='max-w-[946px] flex justify-center gap-[41px] text-center flex-wrap lg:mt-0 mt-4' >
          {skillsData.map((skill) => (
            <div key={skill.id} className='flex items-center flex-col'>
              <Image  src={skill.image} alt={skill.name} width={100} height={100} className="brightness-0 p-2"></Image>
              
              <h1 className='text-[#828282] text-[26px] leading-7 font-inked'>{skill.name}</h1>
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default SkillsPage;
