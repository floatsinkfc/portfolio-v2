import Image from "next/image"
import blossom from '../img/blossom.png'
import { motion } from "framer-motion"
import projectData from '../data/projects';
import projectBg from '../img/projectBg.png'
import Link from "next/link";
import buttonbackground from '../img/buttonbackground.png'
import projectsPageBg from "../img/background2.png"

export default function Projects() {
  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <Image
        alt=""
        src={projectsPageBg}
        className="w-[1493px] h-[1493px] opacity-10 absolute z-0 left-[-736px] object-cover"
      />
      <div id="projects" className=' -translate-y-10 absolute'></div>
      <motion.div
        initial={{ width: 250 }}
        whileInView={{ width: 576 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true, amount: "some" }}
        className="max-w-[550px] h-[300px] absolute -left-[187px] items-center flex -translate-y-44 overflow-hidden"
      >
        <Image src={blossom} alt="" className="object-contain opacity-40 w-full" />
      </motion.div>

      <div className="flex justify-center text-center  lg:mt-0 mt-20 flex-wrap ">
        <div className="px-[20%] w-screen flex justify-center text-center">
        <motion.h1 
        initial={{ y:20, opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 1, delay: 1}}
        viewport={{ once: true  }}
        className=' border-b-[3px] border-black font-inked leading-[44px] text-[40px] break-words w-screen  '>Projects</motion.h1>
        </div>
        <div className="flex w-screen min-h-full mt-5 flex-col justify-center items-center ">
        {projectData.map((project) => (
            <div key={project.id} className='flex justify-start flex-row  lg:flex-nowrap flex-wrap '>
              <motion.div
              initial={{ x:-20, opacity: 0}}
              whileInView={{ x:0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5}}
              viewport={{ once: true, amount: "some"  }}
              className="md:min-w-[500px] lg:max-w-[500px] w-full h-[320px] flex items-center justify-center">
                <video className="md:h-[65%] md:w-[70%] h-[50%] w-[75%] rounded-lg -translate-x-4 -translate-y-2 md:-translate-x-6 md:-translate-y-5" autoPlay disablePictureInPicture  muted loop>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Image src={projectBg} alt="" className="md:w-[500px] w-[400px]  h-[320px] absolute object-cover"></Image>
              </motion.div>
              <motion.div 
              initial={{ x:20, opacity: 0}}
              whileInView={{ x:0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5}}
              viewport={{ once: true, amount: "some"  }}
              className="flex  flex-col text-center lg:w-[445px] w-full items-center px-[20%] lg:px-0">
                <h1 className='text-[20px] leading-7 font-caros text-left mt-6 '>{project.name} | {project.techused}</h1>
                <p className=" text-[16px] font-caros text-[#828282] text-left mt-2">{project.description}</p>
                <div className="w-full flex mt-4 justify-between flex-wrap">
                  <Link href={project.link} target="_blank" className="z-[2] w-[200px] h-[50px] flex text-center items-center justify-center text-white ">
                    <span  className="z-[1]  text-[24px] font-inked tracking-[10.8px]">Link</span>
                    <Image src={buttonbackground} alt="" className="w-[200px] h-[50px] absolute "></Image>
                  </Link>
                  <Link href={project.github} target="_blank" className="z-[2] w-[200px] h-[50px] flex text-center items-center justify-center text-white ">
                    <span  className="z-[1]  text-[24px] font-inked tracking-[10.8px]">Github</span>
                    <Image src={buttonbackground} alt="" className="w-[200px] h-[50px] absolute "></Image>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}
