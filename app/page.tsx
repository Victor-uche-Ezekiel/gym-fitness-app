import Image from "next/image";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Programs from "@/components/sections/programs";
import Trainers from "@/components/sections/trainers";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Programs />
        <Trainers />
      </main>
    </>
  );
}
