import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react";
import Header from "@/components/header";
import { agbalumo } from "./ui/fonts";

export default function FutureStory() {
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
  const scaleProgess = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacityProgess = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 1, 1, 0]);

  const opacityP1Progess = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [0, 0, 1, 0.8]);
  const opacityP2Progess = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [0, 0, 1, 0.8]);

  return <motion.section
    className="p-2 overflow-visible h-[150vh] lg:w-[50vw]"
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess
    }}
  >
    <Header className="sticky top-[8rem] text-center mt-[12rem] sm:mt-[16rem] lg:mt-[20rem]">
      Chuyện mai sau?
      <motion.div
        className="sticky top-0 text-amber-50 mt-5 text-justify font-normal text-base"
        style={{
          opacity: opacityP1Progess
        }}
      >
        Cả đời tớ trước giờ, cái gì cũng làm một mình, học một mình. Tớ ít khi nhận được sự trợ
        giúp từ một ai đó, đơn giản vì ai ai cũng bận rộn cả. Tớ hiểu rằng không thể lo cho tất
        cả mọi người, cả bản thân cũng vậy.
        <motion.div
          className="sticky top-[0rem] text-amber-50 mt-2 text-justify"
          style={{
            opacity: opacityP2Progess
          }}
        >
          Và rồi từ khi có cậu đồng hành cùng tớ, thì cuối cùng tớ cũng tìm được
          <span className={`${agbalumo.className} text-pink-100`}> một người mà mình quan tâm </span>
          và cũng như là
          <span className={`${agbalumo.className} text-pink-100`}> một người thực sự quan tâm mình</span>
          . Tớ muốn được cùng cậu, để cùng nhau đạt những điều mà hai ta hằng mơ ước, cùng lang thang
          trên thế giới này.
        </motion.div>
      </motion.div>
    </Header>
  </motion.section>
}