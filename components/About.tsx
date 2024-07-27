"use client"
import React, {useState} from "react";

const About = () => {
  const collage = [
    {
      image: '/images/bruno-smiling.png'
    },
    {
      image: '/images/Me.png'
    },
    {
      image: '/images/bruno.jpg'
    },
    {
      image: '/images/bruno-smile.jpg'
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="h-screen w-full bg-black-100 relative flex flex-row antialiased">
        <div style={{backgroundImage: `url(${collage[3].image})`, }} className='w-[500px] h-[400px] rounded-2xl bg-center bg-cover duration-500 bg-neutral-300 mt-10'></div>
        <h2 className="text-2xl text-gray-100 mt-10">Hello</h2>
      </div>
    </section>
  );
};

export default About;
