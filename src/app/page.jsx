'use client'
import About from "./components/about";
import ContactForm from "./components/contact";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import Headers from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ScrollToTopButton from "./components/scrollback";

export default function Home() {
  return (
    <div className="w-screen bg-[#F4F3F4] min-h-screen  ">
      <Headers/>
      <Hero/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
      <div>
        <Cursor/>
        <ScrollToTopButton/>
      </div>
      
    </div>
  )
}
