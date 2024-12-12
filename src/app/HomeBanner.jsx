"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import useWindowSize from "./useWindowSize";
import Image from "next/image";

const HomeBanner = () => {
  // const size = useWindowSize();
  // let canvas = useRef(null);

  // useEffect(() => {
  //   let renderingElement = canvas.current;
  //   let drawingElement = renderingElement.cloneNode();
  //   let drawingCtx = drawingElement.getContext("2d");
  //   let renderingCtx = renderingElement.getContext("2d");
  //   let lastX;
  //   let lastY;
  //   let moving = false;

  //   renderingCtx.globalCompositeOperation = "source-over";
  //   renderingCtx.fillStyle = "#0A1E2E";
  //   renderingCtx.fillRect(0, 0, size.width, size.height);

  //   const startDrawing = (ev) => {
  //     moving = true;
  //     lastX =
  //       (ev.touches && ev.touches.length > 0 ? ev.touches[0].pageX : ev.pageX) -
  //       renderingElement.offsetLeft;
  //     lastY =
  //       (ev.touches && ev.touches.length > 0 ? ev.touches[0].pageY : ev.pageY) -
  //       renderingElement.offsetTop;
  //   };

  //   const stopDrawing = (ev) => {
  //     moving = false;
  //     lastX =
  //       (ev.touches && ev.touches.length > 0 ? ev.touches[0].pageX : ev.pageX) -
  //       renderingElement.offsetLeft;
  //     lastY =
  //       (ev.touches && ev.touches.length > 0 ? ev.touches[0].pageY : ev.pageY) -
  //       renderingElement.offsetTop;
  //   };

  //   const draw = (ev) => {
  //     if (moving) {
  //       drawingCtx.globalCompositeOperation = "source-over";
  //       renderingCtx.globalCompositeOperation = "destination-out";
  //       let currentX =
  //         (ev.touches ? ev.touches[0].pageX : ev.pageX) -
  //         renderingElement.offsetLeft;
  //       let currentY =
  //         (ev.touches ? ev.touches[0].pageY : ev.pageY) -
  //         renderingElement.offsetTop;
  //       drawingCtx.lineJoin = "round";
  //       drawingCtx.moveTo(lastX, lastY);
  //       drawingCtx.lineTo(currentX, currentY);
  //       drawingCtx.closePath();
  //       drawingCtx.lineWidth = 320;
  //       drawingCtx.stroke();
  //       lastX = currentX;
  //       lastY = currentY;
  //       renderingCtx.drawImage(drawingElement, 0, 0);
  //     }
  //   };

  //   renderingElement.addEventListener("mouseover", startDrawing);
  //   renderingElement.addEventListener("mousedown", startDrawing);
  //   renderingElement.addEventListener("mouseup", stopDrawing);
  //   renderingElement.addEventListener("mousemove", draw);

  //   // Add event listeners for touch events
  //   renderingElement.addEventListener("touchstart", startDrawing);
  //   renderingElement.addEventListener("touchend", stopDrawing);
  //   renderingElement.addEventListener("touchmove", draw);
  // }, [size.height, size.width]);

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <div className=" relative h-screen w-full  overflow-hidden  bg-primary-navy">
      <div className="  w-full h-full absolute top-0 left-0">
        <div className=" h-full  w-full ">
          <video
            className="object-cover  object-left h-full  w-full "
            loop
            muted
            autoPlay
            src="./hero.mp4"
          />
        </div>
        {/* <canvas
          className="absolute block top-0 left-0 h-screen w-full"
          height={size.height}
          width={size.width}
          ref={canvas}
        /> */}
      </div>
      <div className=" h-full flex flex-col justify-between pointer-events-none w-full absolute top-0">
        <div className=" flex mt-4  justify-between  w-11/12 p-3  text-primary-white text-sm">
          <div className=" w-2 h-2 pointer-events-none"></div>
          <div className=" max-w-sm"></div>
        </div>
        <div className="top-0 md:block hidden left-0 p-8 absolute">
          <Image src="/Logo.png" width={151} height={39} alt="logo" />
        </div>
        {/* <div className=" mb-8 md:ml-8">
          <motion.h1
            className="  font-serif   text-4xl md:text-6xl lg:text-8xl ml-4  pointer-events-none"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.span
              className=" block font-bold  text-primary-red  "
              variants={item}
            >
              Leadership
            </motion.span>
            <motion.span
              className=" block   font-bold italic text-primary-green  "
              variants={item}
            >
              Accountability
            </motion.span>
            <motion.span
              className=" block     font-bold  text-primary-yellow  "
              variants={item}
            >
              Passion.
            </motion.span>
          </motion.h1>
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
