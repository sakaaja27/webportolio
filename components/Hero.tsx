import React from 'react'
import Image from 'next/image'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] 
            flex flex-col md:flex-row 
            items-center 
            justify-between 
            text-center md:text-left 
            gap-10 
          ">
              <Image 
                src="/me.png" 
                alt="Profile" 
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
                Welcome in my website portofolio
              </p>

              <TextGenerateEffect
                words={`Hello,
                        I'm Saka Bramasta`}
                className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
              />
              <p className="text-center md:text-left md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-cyan-100">
                Web development | App development | UI/UX Design 
              </p>

              <a href="#projects">
                <MagicButton
                  title="About Me"
                  icon={<FaLocationArrow />}
                  positionn='right'
                />
              </a>
            </div>

            {/* Untuk desktop, gambar akan di samping */}
            <div className="hidden md:flex items-center justify-end"> 
              <Image 
                src="/me.png" 
                alt="Profile" 
                width={400}
                height={300}
                className="w-[300px] md:w-[400px] h-[300px] rounded-full object-cover"
              />
            </div>
          </div>
      </div>
  )
}

export default Hero