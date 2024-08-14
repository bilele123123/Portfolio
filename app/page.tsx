import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relativ flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-full w-full">
        <Hero></Hero> 
        <About></About>
        <Experience></Experience>
        <Contact></Contact>
        <BackgroundBeams></BackgroundBeams>
      </div>
    </main>
  );
}
