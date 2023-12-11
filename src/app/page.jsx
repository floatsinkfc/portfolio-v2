'use client'
import About from "./components/about";
import Cursor from "./components/cursor";
import Headers from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-screen bg-[#F4F3F4] min-h-screen">
      <Headers/>
      <Hero/>
      <About/>
      <Cursor/>
    </div>
  )
}
