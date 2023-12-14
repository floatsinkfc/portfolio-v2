import Image from "next/image"
import Link from "next/link"
import headerbackground from "../img/headerbackground.png"

export default function Headers() {


  return (
    <div className="w-screen h-[100px] absolute z-30 overflow-hidden">
      <div className="w-screen h-[70px] flex items-center px-[10%] justify-between">
        <h1 className="text-white font-darkline text-[30px] font-normal">Zi Jun Wang</h1>
        <div className=" gap-[67px] flex">
          <Link href="/" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Home</Link>
          <Link href="#about" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">About</Link>
          <Link href="#projects" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Projects</Link>
          <Link href="#contact" className="text-white font-darkline text-[30px] font-normal hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0">Contact</Link>
        </div>
      </div>
      
      <Image src={headerbackground} alt="" className=" -z-10 min-w-[2400px] h-[357px] top-[-150px] left-[-200px] absolute"></Image>
      
    </div>
  )
}
