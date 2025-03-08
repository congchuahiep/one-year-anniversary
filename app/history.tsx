import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { agbalumo } from "./ui/fonts";
import Image from 'next/image';
import Header from "@/components/header"

export default function History() {

  return (
    <section
      className="mt-[20vw] items-center h-full"
    >
      <div className="h-[90rem]">
        <Header
          className="sticky h-[30vh] mb-[10vw] top-10 z-10 p-2">
          Vậy thì mình bắt đầu thôi nhỉ?
        </Header>
        <div className="flex flex-col items-center h-[1300]">
          <Timeline />
        </div>
      </div>
    </section>
  )
}


/**
 *  Timeline này chưa tối ưu việc hiển thị các sự kiện, bởi vì tôi quá ngu :'(
*/
function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"], // Bắt đầu khi SVG vào màn hình, kết thúc khi nó ra khỏi màn hình
  });


  const pathLength = useTransform(scrollYProgress, [0.1, 0.4, 0.5], [0, 0.6, 1]);

  // Các điểm sự kiện (position từ 0 -> 1)
  const events = [
    {
      position: "0%",
      title: "Bắt đầu iu nhau",
      date: "9/3",
      img: "/timeline1.gif",
      offset: "left-5 w-42"
    },
    {
      position: "19%",
      title: "Mình đi tắm bỉn nè",
      date: "13/6",
      img: "/timeline2.gif",
      offset: "w-32 right-4 -top-[4rem]",
    },
    {
      position: "36%",
      title: "Tụi mình càng quét dô li bi",
      date: "24/7",
      img: "/timeline3.gif",
      offset: "w-32 right-5 -top-[2rem]",
    },
    {
      position: "68%",
      title: "Tặng tớ quả đầu cực cháy",
      date: "17/11",
      img: "/timeline4.gif",
      offset: "w-32 right-6 -top-[5rem]",
    },
    {
      position: "78%",
      title: "Cùng nhau tạo nên kỉ niệm ^^",
      date: "19/2/25",
      img: "/timeline5.gif",
      offset: "w-32 -left-10 top-[1rem]",
    }
  ];

  const TIMELINE_PATH = `M179.5 0.5C117.648 14.8024 78.4522 58.8976 71.5 122C61.0152 217.168 286.098 169.954 271 264.5C255.383 362.3 73.9468 236.478 24 322C-42.9423 436.622 363.908 460.696 271 555.5C215.772 611.855 -21 463.045 71.5 587.5C164 711.955 -11.4451 696.503 2 772.5C26.0255 908.301 441 741.5 341 890C241 1038.5 11 935 30.5 1046C50 1157 291.631 1031.66 312 1131C340.013 1267.62 159.5 1059.5 161 1296.5`


  return (
    <div className="path-svg-container absolute">
      <svg
        ref={ref}
        width="360"
        height="1817"
        viewBox="0 0 360 1817"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Đường timeline nét đứt */}
        <motion.path
          d={TIMELINE_PATH}
          stroke="white"
          strokeWidth="2"
          strokeDasharray="15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          style={{ pathLength }}
        />
      </svg>

      {/* Các dấu chấm trên timeline */}
      {events.map((event, index) => (
        <motion.div
          key={index}
          style={{
            offsetPath: `path("${TIMELINE_PATH}")`,
            offsetDistance: event.position,
            offsetRotate: "0deg"
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -260px 0px", amount: 0.5 }}
          className={`w-3 h-3 bg-white rounded-md absolute top-0 left-0 rotate-0`}
        >
          <div
            className={`absolute flex flex-col items-center -top-3 bg-amber-50 p-2 rounded-md shadow-md shadow-pink-500 text-center ${event.offset}`}
          >
            <Image
              className="rounded-sm"
              src={event.img || '/default.jpg'}
              width={148}
              height={148}
              alt={event.title || 'Event image'}
            />
            <h3 className={`${agbalumo.className} font-bold text-indigo-600`}>
              {event.title} - <span className="text-pink-500">{event.date}</span>
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}