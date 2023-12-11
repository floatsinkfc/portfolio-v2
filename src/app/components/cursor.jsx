// Cursor.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import paintBrush from '../img/brushstroke.png'

const Cursor = () => {
  useEffect(() => {
    gsap.set(".brush", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".brush");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.001,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.005,
      });
    });
  }, []);

  return (
    <>
      {[...Array(14)].map((_, index) => (
        <div
          key={index}
          className="brush  h-[41px] w-[28px] fixed top-0 left-0 "
        >
          <Image src={paintBrush} alt="" className="h-[41px] w-[28px] opacity-10 "></Image>
        </div>
      ))}
    </>
  );
};

export default Cursor;
