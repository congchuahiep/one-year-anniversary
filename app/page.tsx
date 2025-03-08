"use client"
import Blank from "@/components/blank";
import Intro from "@/app/intro";
import Prelude from "@/app/prelude";
import History from "@/app/history";


export default function Home() {

  return (
    <main className="flex flex-col items-center overflow-visible">
      <Intro />
      <Prelude />
      <History />
      <Blank />
    </main>
  );
}
