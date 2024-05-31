'use client'
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useState} from "react";
import {Presentation1} from "@/app/_presentation/p1";
import {Presentation2} from "@/app/_presentation/p2";
import {Presentation0} from "@/app/_presentation/p0";
import {Presentation3} from "@/app/_presentation/p3";
import {Presentation4} from "@/app/_presentation/p4";
import {Presentation5} from "@/app/_presentation/p5";

const presentations = [
  () => <Presentation0/>,
  () => <Presentation1/>,
  () => <Presentation2/>,
  () => <Presentation3/>,
  () => <Presentation4/>,
  () => <Presentation5/>,
]

export const Presentation = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(prev => prev === 0 ? presentations.length - 1 : prev - 1)
  }
  const nextSlide = () => {
    setSlide(prev => prev === presentations.length - 1 ? 0 : prev + 1)
  }

  return (
    <div>
      <div className="m-auto mb-8 flex justify-center gap-4">
        {presentations.map((_, index)=>{
          const isActive = index === slide;
          const className = `cursor-pointer w-[15px] h-[15px] rounded-full bg-gray-200 transition ${isActive ? 'bg-gray-500' : ''}`
          const onClick = () => setSlide(index);
          return <div onClick={onClick} key={index} className={className}></div>
        })}
      </div>
      {presentations[slide]()}
      <div className="absolute top-0 left-0 bottom-0 flex items-center opacity-25 hover:opacity-100 transition-opacity cursor-pointer"
           onClick={prevSlide}>
        <ChevronLeft/>
      </div>
      <div className="absolute top-0 right-0 bottom-0 flex items-center opacity-25 hover:opacity-100 transition-opacity cursor-pointer"
           onClick={nextSlide}>
        <ChevronRight/>
      </div>
    </div>
  );
}