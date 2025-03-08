"use client";

// import Intro from "@/components/intro"; // Err
import Prelude from "@/components/prelude"; // YEAH
import History from "@/components/history"; // YEAH
import MiddleStory from "@/components/middle-story";
import FutureStory from "@/components/future";
import PresentStory from "@/components/present";


export default function Home() {

  return (
    <main className="flex flex-col items-center overflow-visible">
      {/* <Intro /> */}
      <Prelude />
      <History />
      <MiddleStory />
      <FutureStory />
      <PresentStory />
    </main>
  );
}
