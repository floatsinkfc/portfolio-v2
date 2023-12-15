import Image from "next/image"
import blossom from '../img/blossom.png'
import { motion } from "framer-motion"
import projectData from '../data/projects';
import projectBg from '../img/projectBg.png'

export default function Projects() {

  return (
    <div  className="w-screen h-screen" >
      <div id="projects" className=' -translate-y-10 absolute'></div>
      <motion.div 
      initial={{ width: 250}}
      whileInView={{ width: 576 }}
      transition={{ duration: 1, delay: 1}}
      viewport={{ once: true, amount: "some"  }}
      className="w-[576px] h-[300px] absolute -left-[187px] items-center flex -translate-y-44">
        <Image src={blossom} alt="" className="object-contain opacity-40 "></Image>
      </motion.div>

      <div className="flex justify-center text-center px-[20%] lg:mt-0 mt-20 flex-wrap">
        <h1 className=' border-b-[3px] border-black font-inked leading-[44px] text-[40px] break-words w-screen'>Projects</h1>
        <div className="flex w-screen min-h-full mt-5 flex-col ">
        {projectData.map((project) => (
            <div key={project.id} className='flex justify-start flex-row flex-wrap '>
              <div className="w-[500px] h-[320px] flex items-center justify-center">
                <video className="h-[65%] w-[70%] rounded-lg -translate-x-6 -translate-y-5" autoPlay  muted>
                  <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Image src={projectBg} alt="" className="w-[500px] h-[320px] absolute object-cover"></Image>
              </div>
              
              <h1 className='text-[#828282] text-[26px] leading-7 font-inked'>{project.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
