"use client";

import ThreadCard from "@/components/cards/ThreadCard";
import './scrollbar.css'
export default function Home() {
  return (
    <div className="w-full lg:w-4/6 bg-neutral-950  overflow-y-auto">
      <h1 className="text-black dark:text-white text-2xl mx-4 my-6 border-b border-neutral-600 pb-3 pl-1">Home</h1>
      <div className="h-fit">
        <ThreadCard />
        <ThreadCard />
      </div>
    </div>
  );
}
