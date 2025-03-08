"use client"
import Blank from "@/components/blank";
import Intro from "@/app/intro";
import Prelude from "@/app/prelude";
import History from "@/app/history";
import MiddleStory from "@/app/middle-story";
import FutureStory from "@/app/future";


export default function Home() {

  return (
    <main className="flex flex-col items-center overflow-visible">
      <Intro />
      <Prelude />
      <History />
      <MiddleStory />
      <FutureStory />
    </main>
  );
}
