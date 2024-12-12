import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data.js";
import Image from "next/image.js";

const variants = {
  enter: {
    opacity: 0,
  },

  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,

    opacity: 0,
  },
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedTab, setSelectedTab] = useState("All");

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" w-full   h-full animate-fade    mt-2 flex  flex-col ">
      <div className="w-[90%]  pt-6 m-auto h-fit flex relative flex-col lg:flex-row  lg:items-center justify-between ">
        <div className=" text-[32px] font-bold w-full text-center ">
          About Us
        </div>
        {/* <div className=" max-md:w-full  w-fit   max-md:mt-4 text-sm md:text-base font-bold flex bg-white ">
          <div
            onClick={() => setSelectedTab("All")}
            className={`p-2 px-3 whitespace-nowrap hover:text-primary-yellow hover:bg-primary-navy  ${
              selectedTab === "All" ? "text-primary-yellow bg-primary-navy" : ""
            }`}
          >
            All
          </div>
          <div
            onClick={() => setSelectedTab("Branding")}
            className={`p-2 px-3 whitespace-nowrap hover:text-primary-yellow hover:bg-primary-navy  ${
              selectedTab === "Branding"
                ? "text-primary-yellow bg-primary-navy"
                : ""
            }`}
          >
            Branding
          </div>
          <div
            onClick={() => setSelectedTab("Digital")}
            className={`p-2 px-3 whitespace-nowrap hover:text-primary-yellow hover:bg-primary-navy  ${
              selectedTab === "Digital"
                ? "text-primary-yellow bg-primary-navy"
                : ""
            }`}
          >
            Digital marketing
          </div>
          <div
            onClick={() => setSelectedTab("SEO")}
            className={`p-2 px-3 whitespace-nowrap hover:text-primary-yellow hover:bg-primary-navy  ${
              selectedTab === "SEO" ? "text-primary-yellow bg-primary-navy" : ""
            }`}
          >
            SEO
          </div>
        </div> */}
      </div>
      <div className=" h-[90%] w-full flex flex-col  items-center p-3">
        <div className=" w-full overflow-hidden rounded-md max-w-[1020px] relative  aspect-video ">
          <Image
            alt="about"
            className=" object-cover object-center"
            fill
            src="/about.jpg"
          />
        </div>
        <div className="  md:text-sm text-xs font-medium md:leading-6  leading-5 w-full pt-2 max-w-[1020px]">
          <p>
            OVERLAP is a 360 degree Digital Marketing Agency conveying
            administrations, answers for undertakings around the world. We have
            built robust and profitable practices in Digital Marketing
            Application for all the eBusinesses.
            <br />
            Our experience and expertise in executing large scale budgeted
            projects is a complementary mix of project management,
            business/market analysis and a use of class apart digital marketing
            technology. Since its inception in 2017, OVERLAP has been harnessing
            the scope of web-Information Technology, to enable its clients in
            increasing a serious edge in the business/industry they work in.
            <br />
            Our mission is to enable people and companies to increase their
            “business value” through the use of Digital Marketing Technologies.
            We aim at delivering services which will open new possibilities for
            our customers and allow them to work effectively and creatively.
            <br />
            <br />
            <span className=" md:text-lg">
              Our values are: <span className=" font-bold">LAP</span>
            </span>
            <br />
            <span className=" font-bold  md:text-lg">
              Leadership , Accountability and Passion
            </span>
            <br />
            So <span className=" font-bold  md:text-lg">Let’s OVERLAP</span>
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" h-[90%] w-full flex md:items-center">
        <div className=" md:w-[90%]  w-[100%] max-w-4xl  max-md:pt-14 mx-auto  md:m-auto h-fit flex relative  flex-col md:items-center ">
          <AnimatePresence initial={false}>
            <motion.img
              key={page}
              className=" absolute  aspect-video w-[100%] md:max-w-7xl "
              src={images[imageIndex]}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.75 },
              }}
            />
            <div className=" relative  aspect-video w-[100%] md:max-w-5xl "></div>
          </AnimatePresence>

          <div className=" w-[100%] md:max-w-7xl m-auto h-[100%]  flex  flex-col md:flex-row  bg-white">
            <div className=" px-5 block h-full md:hidden py-7">
              <h2 className=" text-2xl  font-medium">Lorem Ipsum.</h2>
              <br />
              <p className=" text-[15px] leading-7 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make.
              </p>
            </div>
            <div className="flex md:hidden w-full">
              <div
                className=" w-full   md:hidden group p-2 md:w-[10%] hover:fill-primary-yellow flex items-center text-5xl justify-center bg-gray-200  hover:bg-primary-navy rotate-180 hover:text-white"
                onClick={() => paginate(1)}
              >
                <svg
                  width="18"
                  height="33"
                  viewBox="0 0 18 33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
                </svg>
              </div>
              <div
                className=" w-full  md:block p-2 group md:w-[10%] flex  hover:fill-primary-yellow items-center justify-center text-5xl bg-gray-200 hover:bg-primary-navy hover:text-white"
                onClick={() => paginate(-1)}
              >
                <svg
                  width="18"
                  height="33"
                  viewBox="0 0 18 33"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
                </svg>
              </div>
            </div>
            <div
              className="   md:flex group p-2 hidden w-[10%] hover:fill-primary-yellow  items-center text-5xl justify-center bg-gray-200  hover:bg-primary-navy rotate-180 hover:text-white"
              onClick={() => paginate(1)}
            >
              <svg
                width="18"
                height="33"
                viewBox="0 0 18 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
              </svg>
            </div>
            <div className=" hidden md:block px-5 py-7">
              <h2 className=" text-2xl  font-medium">Lorem Ipsum.</h2>
              <p className=" text-xs font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make.
              </p>
            </div>
            <div
              className="  md:flex p-2 group w-[10%] hidden  hover:fill-primary-yellow items-center justify-center text-5xl bg-gray-200 hover:bg-primary-navy hover:text-white"
              onClick={() => paginate(-1)}
            >
              <svg
                width="18"
                height="33"
                viewBox="0 0 18 33"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.3092 17.3679C17.4477 17.2306 17.5576 17.0671 17.6326 16.8871C17.7076 16.707 17.7463 16.5139 17.7463 16.3188C17.7463 16.1237 17.7076 15.9306 17.6326 15.7505C17.5576 15.5705 17.4477 15.407 17.3092 15.2697L2.53281 0.493302C2.39504 0.355526 2.23148 0.246239 2.05147 0.171677C1.87146 0.0971148 1.67853 0.0587389 1.48369 0.0587389C1.28885 0.0587389 1.09591 0.0971147 0.915905 0.171677C0.735897 0.246239 0.572337 0.355526 0.434564 0.493301C0.296792 0.631073 0.187504 0.794632 0.112942 0.974642C0.0383798 1.15465 4.09549e-06 1.34758 4.06994e-06 1.54242C4.04439e-06 1.73726 0.0383797 1.93019 0.112942 2.1102C0.187504 2.29021 0.296791 2.45377 0.434564 2.59154L14.1766 16.3188L0.434561 30.0461C0.156316 30.3243 2.40299e-07 30.7017 1.94562e-07 31.0952C1.48824e-07 31.4887 0.156316 31.8661 0.43456 32.1443C0.712805 32.4225 1.09019 32.5789 1.48368 32.5789C1.87718 32.5789 2.25456 32.4225 2.53281 32.1443L17.3092 17.3679Z" />
              </svg>
            </div>
          </div>
        </div>
      </div> */
}
