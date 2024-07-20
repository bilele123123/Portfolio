import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relativ flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-full w-full">
        <Hero></Hero> 
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      </div>
    </main>
  );
}
