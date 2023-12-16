import Image from "next/image"
import Link from "next/link"
import mountain from "../img/mountain.png"
import bamboo from "../img/bamboo.png"
import boat from "../img/boat.png"
import bridge from "../img/bridge.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import crane from "../img/crane.png"
import buttonbackground from "../img/buttonbackground.png"
import buttonbackground2 from "../img/button2background.png"

export default function Hero() {
  return (
    <div className="w-screen h-screen flex" id="home">
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-[20px] z-[2]">
        <h1 className= "font-inked md:text-[120px] font-normal flex flex-row text-center text-[60px]">Hi, I&#39;m Zi Jun Wang</h1>
        <div className="flex items-center ">
          <h1 className= "text-[#828282] font-inked md:text-[26px] text-[20px] font-normal">Software Engineer</h1>
          <Link href="https://www.linkedin.com/in/zi-jun-wang/" className="" target="_blank">
            <Image src={linkedin} className="h-[30px] w-[30px] ml-[14px] " alt=""></Image>
          </Link>
          <Link href="https://github.com/floatsinkfc" className="" target="_blank">
            <Image src={github} className="h-[30px] w-[30px] ml-[9px]" alt=""></Image>
          </Link>
        </div>
        <div className="flex md:gap-[100px] gap-[20px] z-[1] mt-5 flex-wrap justify-center">
            <Link href="#projects" className="z-[2] w-[260px] h-[80px] flex items-center justify-center text-white hover:animate-jump hover:animate-duration-1000 hover:animate-once ">
              <span  className=" z-[1] text-[24px] font-inked tracking-[10.8px] ">PROJECTS</span>
              <Image src={buttonbackground} alt="" className="w-[259px] h-[76px] absolute "></Image>
            </Link>

            <Link href="#about" className=" z-[2] w-[260px] h-[80px] flex items-center justify-center text-white hover:animate-jump hover:animate-duration-1000 hover:animate-once">
              <span className=" z-[1] text-[24px] font-inked tracking-[10.8px] ">RESUME</span>
              <Image src={buttonbackground2} alt="" className="w-[263px] h-[90px] absolute "></Image>
            </Link>
          
        </div>

      </div>
      <div className="z-0 absolute w-screen h-full overflow-hidden ">
        <Image src={mountain} alt="" className="h-[470px] w-[528px] absolute top-[360px] -left-[228px] lg:scale-100 scale-50 md:scale-75"></Image>
        <Image src={bamboo} alt="" className="h-[388px] w-[568px] absolute top-[-110px] -left-[206px] lg:scale-100 scale-50 md:scale-75"></Image>
        <Image src={boat} alt="" className="h-[226px] w-[226px] absolute top-[187px] right-[190px] lg:scale-100 scale-0 md:scale-75"></Image>
        <Image src={bridge} alt="" className="h-[362px] w-[362px] absolute top-[497px] right-[-75px] lg:scale-100 scale-0 md:scale-75"></Image>
        
      </div>
      <Image src={crane} alt="" className="md:h-[99px] md:w-[158px] absolute top-[138px] right-[48px] animate-wiggle animate-infinite hover:animate-fade-right hover:animate-reverse hover:animate-once z-[10] w-[0px]"></Image>
      
    </div>
  )
}
