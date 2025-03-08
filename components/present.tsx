"use client";

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react";
import Header from "@/components/header";
import { agbalumo } from "../app/ui/fonts";

export default function PresentStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Target scroll tracking
    target: ref,
    // Tracking offset:
    // * Start: head element = 0 && end viewport = 1
    // * End: end element = 1 && head viewport = 0
    offset: ["0 1", "1 0"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log("scrollYProgress:", latest);
    });

    return () => unsubscribe(); // Cleanup khi component unmount
  }, [scrollYProgress]);

  // Setup scroll effect
  // useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  // * scrollYProgress = 0   -> Scale = 0.8 (get in viewport -> small)
  // * scrollYProgress = 0.5 -> Scale = 1   (normal)
  // * scrollYProgress = 1   -> Scale = 0.8 (get out viewport -> small)
  const scaleProgess = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const opacityProgess = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0]);

  const opacityP1Progess = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 0.8]);
  const opacityP2Progess = useTransform(scrollYProgress, [0, 0.4, 0.45, 1], [0, 0, 1, 0.8]);
  const opacityP3Progess = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [0, 0, 1, 0.8]);

  return <motion.section
    className="p-2 overflow-visible h-[200vh] lg:w-[50vw]"
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess
    }}
  >
    <Header className="sticky top-[10rem] text-center mt-[12rem] sm:mt-[16rem] lg:mt-[20rem]">
      Hiện tại là món quà
      <motion.div
        className="sticky top-0 text-amber-50 mt-5 text-justify font-normal text-base"
        style={{
          opacity: opacityP1Progess
        }}
      >
        Dù gì thì ta cũng đã yêu nhau được một năm rồi nhỉ? Vui có, buồn có. Nhưng điều đặc
        biệt nhất là bọn mình đã học được nhiều bài học để hiểu nhau hơn, và hơn cả đó chính
        là <span className={`${agbalumo.className} text-pink-100`}>ngay lúc này ta vẫn bên nhau</span>.
        <motion.div
          className="sticky top-[0rem] text-amber-50 mt-2 text-right italic"
          style={{
            opacity: opacityP2Progess
          }}
        >
          <br/>
          Yesterday is <span className={`${agbalumo.className} text-pink-100`}>history</span>,<br/>
          tomorrow is a <span className={`${agbalumo.className} text-pink-100`}>mystery</span>,<br/>
          but today is <span className={`${agbalumo.className} text-pink-100`}>a gift</span>,
          that is why it is called <span className={`${agbalumo.className} text-pink-300`}>the present</span>
          <motion.div
            className="sticky top-[0rem] text-amber-50 mt-2 text-center not-italic"
            style={{
              opacity: opacityP3Progess
            }}
          >
            <br/>
            <br/>
            <br/>
            Yêu cậu nhiều, <span className={`${agbalumo.className}`}>Nguyễn Phan Ngọc Uyên</span>
            <br/>
            Từ, <span className={`${agbalumo.className}`}>Trần Hoàng Hiệp</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </Header>
  </motion.section>
}