import { useRef } from "react"
import { agbalumo, dancingScript } from "@/app/ui/fonts";
import { motion, useScroll, useTransform } from "motion/react";

export default function Prelude() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // Target scroll tracking
    target: ref,
    // Tracking offset:
    // * Start: head element = 0 && end viewport = 1
    // * End: end element = 1 && head viewport = 0
    offset: ["0 1", "1 0"]
  })

  // Setup scroll effect
  // useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  // * scrollYProgress = 0   -> Scale = 0.8 (get in viewport -> small)
  // * scrollYProgress = 0.5 -> Scale = 1   (normal)
  // * scrollYProgress = 1   -> Scale = 0.8 (get out viewport -> small)
  const scaleProgess = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacityProgess = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0]);

  return <motion.section
    className="p-2 overflow-visible h-[200vh]"
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess
    }}
  >
    <div
      className={`
      sticky top-[20vh] lg:top-[30vh]
      container bg-amber-50 sm:w-[60vw] lg:w-[40vw] lg:px-[5rem] px-5 py-20 my-10 text-center
      rounded-2xl shadow-md shadow-pink-500
    `}
    >
      <h1 className="text-2xl font-bold text-pink-600 mb-3">
        Gửi tặng cậu <span className={`${agbalumo.className} underline decoration-pink-600 text-indigo-600 font-bold`}>Ngọc Uyên</span>
      </h1>
      <p className="indent-4 text-justify mb-3">
        Ý định ban đầu của tớ là tặng <span className={`${agbalumo.className} text-pink-600`}>cậu</span> một cuốn sổ,
        ghi lại hành trình mình bên nhau. Tớ vẫn nghĩ là tặng cho cuốn sổ sẽ hay hơn, được cầm, được nắm, được chạm, và
        tiếp xúc với món quà của tớ một cách vật lý. Nhưng rồi cậu vô tình spoil món quà của cậu, là một
        <span className={`${agbalumo.className} text-indigo-600`}> cuốn sổ! </span> Lmao sao lại y chang tớ nhỉ?
        Thế nên giờ tớ nghĩ lại, có lẽ mình nên tặng thứ khác. . . Một thứ gì đó có thể thay thế được đây?. . . Rồi tớ chợt
        nhận ra: <span className={`${dancingScript.className} text-indigo-700 text-xl font-medium`}>&quot;À, mình là trai IT, sao không thể tặng cậu
          ấy một món quà mà mình giỏi làm nhất nhỉ?&quot;</span>
      </p>
      <p className="indent-8 text-right mb-3 italic">
        Tuy rằng món quà này còn những chỗ lem nhem lở nhở, <span className={`${agbalumo.className} text-indigo-600`}>hi vọng</span> rằng cậu sẽ thích nó ❤️
      </p>
    </div>
  </motion.section>

}