import Image from "next/image";
import SkillsPage from "./skills";
import mountainBg from '../img/mountainbg.png';
import AboutMe from "./aboutme";

export default function About() {
  return (
    <div className="w-screen min-h-screen overflow-hidden relative">
      <div id="about" className="-translate-y-10 absolute"></div>
      <div className="absolute lg:-right-[272px] -right-[400px]  max-w-screen">
        <div className="overflow-hidden ">
          <Image
            src={mountainBg}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex-wrap">
        <div>
          <SkillsPage />
        </div>
        <div className="lg:mt-32 mt-20">
          <AboutMe />
        </div>
      </div>
      
    </div>
  );
}
