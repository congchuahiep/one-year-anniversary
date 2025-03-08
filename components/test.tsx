import { motion, useScroll } from "framer-motion";

export default function ScrollFadeOut() {
  const { scrollYProgress } = useScroll({
    offset: ["start 0px", "start 300px"], // Bắt đầu từ 0px và kết thúc ở 300px
  });

  return (
    <div className="h-[200vh] flex justify-center items-center">
      <motion.div
        style={{ opacity: 1 - scrollYProgress }}
        className="w-64 h-64 bg-blue-500 flex justify-center items-center text-white text-2xl fixed top-10"
      >
        Tôi sẽ biến mất 👋
      </motion.div>
    </div>
  );
}
