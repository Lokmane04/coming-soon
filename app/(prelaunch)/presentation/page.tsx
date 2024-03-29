"use client";
import TransitionLink from "@/components/animations/TransitionLink";
import React, { useState } from "react";
import { GoArrowLeft, GoChevronUp, GoChevronDown } from "react-icons/go";
const Presentation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="m-0 p-0 h-full w-full">
      <div className="left-1.5 top-3.5 fixed cursor-pointer m-5/2 p-0 border-none rounded-full z-30">
        <TransitionLink
          href="/"
          color="inverted"
          label="Home"
          svg={{ icon: "start", component: <GoArrowLeft className="mr-2" /> }}
          cn="m-0"
        />
      </div>
      <div
        className="presentation_container overflow-hidden z-0"
        style={{ height: "100vh", width: "100%" }}
      >
        <iframe
          src="https://pitch.com/embed-link/y2hbxt"
          allow="fullscreen"
          allowFullScreen
          style={{ border: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <button
        className="right-3 bottom-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        {isOpen ? <GoChevronDown /> : <GoChevronUp />}
      </button>
      {isOpen && (
        <div
          className="flex justify-start bg-slate-700 text-white text-lg absolute bottom-0 left-0 z-10 pr-16 py-2"
          style={{ height: "8vh", width: "100%" }}
        >
          <div className="mr-2 mt-1/2">Manual:</div>
          <div className="mr-3 w-2/5 flex flex-col items-start">
            Press the spacebar,right arrow to advance to the next slide.
            <br />
            Press the left arrow key to go back to the previous slide.
            <br />
          </div>
          <div className="mr-auto w-2/5 flex flex-col items-start ">
            * Press the escape key (Esc) to exit the fullscreen mode
            <br />* You can enter the fullscreen mode from from the panel
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
