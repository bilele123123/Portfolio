import React from "react";
import { FloatingNavDemo } from "./FloatingNav";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="h-screen w-full bg-black-100 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 relative z-20">
          <p className="uppercase tracking-widest text-x text-neutral-400 max-w-80 pb-2">
            always keep your smile 😊
          </p>
          <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-white font-bold">
            Thai Le
          </h1>
          <p></p>
          <p className="text-neutral-400 max-w-lg mx-auto my-2 text-xl relative z-10">
            I love to bicycle, powerlift, binge web comics and spending time
            with my family and friends.
          </p>

          <a
            href="https://drive.google.com/file/d/1v4V-Az_GJMNHIlS_DBS0XalYkdATOf-L/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="text-neutral-300 bg-black-200 px-6 py-2 rounded-xl uppercase font-medium hover:bg-black-500 hover:font-medium relative z-20">
              Resume
            </button>
          </a>
        </div>
        <FloatingNavDemo></FloatingNavDemo>
      </div>
    </section>
  );
};

export default Hero;
