import Image from "next/image"
import SkillsPage from "./skills"
import mountainBg from '../img/mountainbg.png'
import AboutMe from "./aboutme"

export default function About() {

  return (
    <div  className="w-screen min-h-screen" >
      <div id="about" className=' -translate-y-10 absolute'></div>
        <div className="flex-wrap">
          <div>
                <SkillsPage/>
          </div>
          <div className="lg:mt-32 mt-20">
                <AboutMe/>
          </div>
        </div>
      <Image src={mountainBg} alt="" className="w-[640px] h-[965px] absolute -right-[272px] top-[800px]"></Image>
    </div>
  )
}
