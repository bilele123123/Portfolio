"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#hero",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
        name: "About",
        link: "#about",
      },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
