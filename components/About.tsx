"use client";
import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const About = () => {
  const [index, setIndex] = useState(0);

  const collage = [
    {
      image: "/images/sitting-because-of-pulled-hamstring.jpg",
    },
    {
      image: "/images/bored-at-beach.jpg",
    },
    {
      image: "/images/bruno-smile.jpg",
    },
    {
      image: "/images/im-venom.jpg",
    },
    {
      image: "/images/so-romantic.jpg",
    },
    {
      image: "/images/squirrel.jpg",
    },
    {
      image: "/images/yanyan-cute.jpg",
    },
    {
      image: "/images/yanyan.jpg",
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % collage.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex + 1) % collage.length);
  };

  return (
    <section id="about" className="about-section">
      <div className="h-full w-full bg-black-100  flex flex-col items-center antialiased">
        <h2 className="text-white text-4xl mt-10 font-medium">About</h2>
        <div className="about-me-content flex flex-row justify-between w-[85%] my-20">
          <div
            style={{
              backgroundImage: `url(${collage[index].image})`,
              backgroundSize: "cover",
            }}
            className="image-collage w-[50%] h-[500px] rounded-2xl bg-center bg-cover duration-500 bg-neutral-300 flex flex-row justify-between items-center"
          >
            <div className="text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft
                size={50}
                onClick={handlePrev}
              ></BsChevronCompactLeft>
            </div>
            <div className="text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight
                size={50}
                onClick={handleNext}
              ></BsChevronCompactRight>
            </div>
          </div>

          <div className="about-me-description w-[49%] text-neutral-400 text-xl relative z-10">
            <div className="space-y-3">
              <p>Hi! My name is Thai, and I am currently working at CSULB, as a software developer, under the WDC department.</p>
              <p>I was born in Đà Nẵng, Vietnam, and was naturalized as of 2023.</p>
              <p>I've always had a keen interest in technologies, learning, and picking up new hobbies.</p>
              <p>As of late, these are my favorite things to do throughout the week.</p>
              <ol className="mt-3 space-y-1">
                <li>- Guitar/ Piano, mainly percussive fingerstyle and jazz ^.^</li>
                <li>- Catching up on the weekly One Piece updates and other webtoons.</li>
                <li>- Working out and playing sports with my friends and girlfriend.</li>
                <li>- Bicycling around the neighborhood, I ride fixed gear.</li>
                <li>- Spending hours getting stuck on a LeetCode problem.</li>
                <li>- Annoy my dog and cat, their name is Bruno and Yan Yan.</li>
              </ol>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
