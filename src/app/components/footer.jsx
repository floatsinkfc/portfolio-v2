import Link from "next/link"
import Image from "next/image"
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import { motion } from "framer-motion"

export default function Footer() {

  return (
    <motion.div
    initial={{ y:40, opacity: 0}}
    whileInView={{ y:0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5}}
    viewport={{ once: true, amount: "some"  }}
    className="w-screen min-h-[200px] bg-black overflow-hidden" >
      <div className="flex w-screen min-h-[200px]  items-end justify-between flex-col md:gap-0 gap-20 ">
        <div className="grid md:grid-cols-3 w-screen h-full z-30  grid-cols-none ">
          <div className="  flex flex-col text-center gap-7">
            <h1 className=" text-white font-inked text-4xl mt-10">Resume</h1>
            <Link href="#home" className="text-[#828282] font-caros lg:text-[24px] text-[18px] font-normal ">Click Me</Link>
          </div>
          <div className="  flex flex-col text-center gap-7">
            <h1 className=" text-white font-inked text-4xl mt-10">Links</h1>
            <div className="flex gap-7 justify-center items-center md:flex-row flex-col">
              <Link href="#home" className="text-[#828282] font-caros lg:text-[24px] text-[18px] font-normal ">Home</Link>
              <Link href="#about" className="text-[#828282] font-caros lg:text-[24px] text-[18px] font-normal ">About</Link>
              <Link href="#projects" className="text-[#828282] font-caros lg:text-[24px] text-[18px] font-normal ">Projects</Link>
              <Link href="#contact" className="text-[#828282] font-caros lg:text-[24px] text-[18px] font-normal ">Contact</Link>
            </div>
          </div>
          <div className="  flex flex-col text-center gap-7 ">
            <h1 className=" text-white font-inked text-4xl mt-10">Socials</h1>
            <div className="flex justify-center items-center gap-10 md:flex-row flex-col">
              <Link href="https://www.linkedin.com/in/zi-jun-wang/" className="" target="_blank">
                <Image src={linkedin} className="h-[30px] w-[30px] invert" alt=""></Image>
              </Link>
              <Link href="https://github.com/floatsinkfc" className="" target="_blank">
                <Image src={github} className="h-[30px] w-[30px] invert" alt=""></Image>
              </Link>
            </div>
              <Link href="mailto:floatsinkfc@gmail.com" className="text-[#828282] font-caros text-[18px] font-normal break-words">Email Me Here</Link>
          </div>
        </div>
        <h1 className="text-white font-inked mb-5 w-screen text-center z-30">Made with ♥️ by Zi Jun Wang</h1>
      </div>
    </motion.div>
  )
}
