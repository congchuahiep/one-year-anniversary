"use client";

import Image from "next/image";
import * as motion from "motion/react-client"
import { parisienne } from "@/app/ui/fonts";
// import UseAnimations from 'react-useanimations';
// import arrowDown from 'react-useanimations/lib/arrowDown';


export default function Intro() {
  return (
    <div className="">
      <motion.div 
        className="bg-violet-500 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
          scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
          ease: 'easeOut'
        }}
      />
      <motion.div
        className="bg-purple-50 absolute -z-9 top-[60vh] right-[2rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] dark:bg-[#676394]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
          ease: 'easeOut'
        }}
      />
      <motion.div
        className="bg-pink-400 absolute -z-8 top-[28vh] left-[21vw] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
          scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
          ease: 'easeOut'
        }}
      />
      <section
        id="home"
        className="z-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-[20rem] lg:pt-[26rem] h-lvh"
      >
        <motion.h1
          className="mb-10 mt-4 px-4 text-4xl font-medium text-secondary flex flex-col"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
            ease: 'easeOut'
          }}
        >
          <div className="flex justify-start">
            <p className="font-black">Happy <span className="text-pink-500 whiteOutline">one</span> year anniversary </p>
            <div className="w-20"></div>
          </div>

          <div className="flex justify-end">
            <div>
              <span className={`${parisienne.className} text-5xl`}>{" "}my darling!</span>
              <div className="border-t-4 border-pink-500 rounded-xl animate-[expand_3s_ease-in-out_forwards]"></div>
            </div>
          </div>
        </motion.h1>
      </section>

      <motion.div
        className="border-8 -z-1 border-b-[4rem] absolute top-[5rem] lg:top-[11rem] right-2 lg:right-[7rem] drop-shadow-lg"
        initial={{ x: '-120vw', y: "80vw", rotate: 20 }}
        animate={{ x: '0', y: "0", rotate: -20 }}
        transition={{
          duration: 1.3,
          scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
          ease: 'easeOut'
        }}
      >
        <Image
          src={"/landing1.jpg"}
          width={160}
          height={160}
          alt="landing1"
          className="md:w-[260px]"
        />
      </motion.div>

      <motion.div
        className="border-8 -z-1 absolute top-[2rem] lg:top-[8rem] left-[2rem] lg:left-[10rem] drop-shadow-lg -rotate-12"
        initial={{ x: '-100vw', y: "80vw", rotate: -10 }}
        animate={{ x: '0', y: "0", rotate: 30 }}
        transition={{
          duration: 1.3,
          delay: 0.4,
          scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
          ease: 'easeOut'
        }}
      >
        <Image
          src={"/landing2.jpg"}
          width={160}
          height={160}
          alt="landing2"
          className="md:w-[260px]"
        />
      </motion.div>

      <motion.div
        className="border-8 -z-1 absolute top-[32rem] lg:top-[38rem] lg:left-[12rem] drop-shadow-lg overflow-hidden"
        initial={{ x: '-100vw', y: "80vw", rotate: 10 }}
        animate={{ x: '0', y: "0", rotate: 10 }}
        transition={{
          duration: 1.3,
          delay: 0.1,
          scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
          ease: 'easeOut'
        }}
      >
        <Image
          src={"/landing3.jpg"}
          width={280}
          height={280}
          alt="landing3"
          className="md:w-[380px]"
        />
      </motion.div>

      {/* <motion.div
        className="absolute right-5 top-[85vh] text-stone-100 text-center hidden lg:flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
          ease: 'easeOut'
        }}
      >
        Còn<br />nhiều nữa
        <UseAnimations className="" animation={arrowDown} size={56} strokeColor="white" />
      </motion.div> */}
    </div>
  )
}