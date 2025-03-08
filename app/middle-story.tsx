import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react";
import Header from "@/components/header";

export default function MiddleStory() {
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

  const opacityP1Progess = useTransform(scrollYProgress, [0, 0.3, 0.35, 1], [0, 0, 1, 0.8]);
  const opacityP2Progess = useTransform(scrollYProgress, [0, 0.4, 0.45, 1], [0, 0, 1, 0.8]);
  const opacityP3Progess = useTransform(scrollYProgress, [0, 0.5, 0.55, 1], [0, 0, 1, 0.8]);

  return <motion.section
    className="p-2 overflow-visible h-[500vh] lg:w-[50vw]"
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess
    }}
  >
    <Header className="sticky top-[10rem] text-center mt-[12rem] sm:mt-[16rem] lg:mt-[20rem]">
      Đó là những mảnh chuyện quá khứ
      <motion.div
        className="sticky top-0 text-amber-50 mt-5 text-justify font-normal text-base"
        style={{
          opacity: opacityP1Progess
        }}
      >
        Thật tuyệt vời khi chúng ta đã tìm thấy nhau tại ngày này, không sớm, không muộn,
        cũng không phải là đúng lúc mình muốn. Mà nó đến lúc mình cần, vì hai ta cần nhau,
        tớ biết điều đó.
        <motion.div
          className="sticky top-[0rem] text-amber-50 mt-2 text-justify"
          style={{
            opacity: opacityP2Progess
          }}
        >
          Hjx, thiệt tình trong lúc mình đang viết đến đoạn này thì mình cũng khá đuối rồi.
          Nhắc về quá khứ, đáng lẽ tớ nên chuẩn bị sớm hơn, thiệt tình thì giờ chỉ còn vài
          tiếng đồng hồ nữa là gặp được cậu (lúc mà mình viết đoạn này). Nên những dòng
          văn dưới đây tớ có thể tự tin nói rằng tớ đang viết bằng cả trái tim.

          <motion.div
            className="sticky top-[26rem] text-amber-50 mt-2 text-justify"
            style={{
              opacity: opacityP3Progess
            }}
          >
            Dù gì thì ta cũng đã yêu nhau được một năm rồi nhỉ? Vui có, buồn có. Nhưng điều đặc
            biệt nhất là bọn mình đã học được nhiều bài học để hiểu nhau hơn, và hơn cả đó chính
            là ngay lúc này ta vẫn bên nhau. Đối với tớ, trong những ngày tháng yêu cậu, tớ thực
            sự rất là hạnh phúc, tớ cảm nhận được những cảm xúc tớ chưa từng có khi được ở bên
            cậu.
          </motion.div>
        </motion.div>
      </motion.div>
    </Header>
  </motion.section>
}