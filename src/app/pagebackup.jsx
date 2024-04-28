"use client";
import React, { useEffect, useState } from "react";
import HomeBanner from "./HomeBanner";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from "framer-motion";
import Contact from "./Contact";
import Team from "./Team";
import Services from "./Services";
import Gallery from "./Gallery";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [menuSelected, setMenuSelected] = useState("home");

  const [mobilemenu, mobilesetMenu] = useState(false);
  const [mobilemenuSelected, mobilesetMenuSelected] = useState("home");

  const mobilecontrolsMenu = useAnimation();
  const mobilecontrolServices = useAnimation();
  const mobilecontrolOurWork = useAnimation();
  const mobilecontrolContact = useAnimation();
  const mobileChildTeam = useAnimation();
  const mobileChildBlog = useAnimation();

  const controlsMenu = useAnimation();
  const controlServices = useAnimation();
  const controlOurWork = useAnimation();
  const controlContact = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (menu) {
        await controlsMenu.start({ width: "300px", duration: 0.5 });
      }
      if (!menu) {
        await controlsMenu.start({ width: "50px", duration: 0.5 });
      }
    };

    sequence();
    return () => {
      controlsMenu.stop();
    };
  }, [menu, controlsMenu]);

  useEffect(() => {
    const sequence = async () => {
      if (menuSelected === "OurWork") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlOurWork.start({ width: "100%", duration: 0.1 });
        controlContact.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "contact") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlContact.start({ width: "100%", duration: 0.1 });
        controlOurWork.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "services") {
        controlsMenu.start({ width: "100%", duration: 0.5 });
        await controlServices.start({ width: "100%", duration: 0.1 });
        controlOurWork.start({ width: "50px", duration: 0.5 });
        controlContact.start({ width: "50px", duration: 0.5 });
      }
      if (menuSelected === "home") {
        controlsMenu.start({ width: "50px", duration: 0.5 });
        controlServices.start({ width: "100%", duration: 0.5 });
        controlOurWork.start({ width: "100%", duration: 0.5 });
        controlContact.start({ width: "100%", duration: 0.5 });
      }
    };

    sequence();
    return () => {
      controlServices.stop();
    };
  }, [menuSelected, controlServices]);

  useEffect(() => {
    const sequence = async () => {
      if (mobilemenu) {
        await mobilecontrolsMenu.start({ height: "100%", duration: 0.5 });
      }
      if (!mobilemenu) {
        await mobilecontrolsMenu.start({ height: "120px", duration: 0.5 });
      }
    };

    sequence();
    return () => {
      mobilecontrolsMenu.stop();
    };
  }, [mobilemenu, mobilecontrolsMenu]);

  useEffect(() => {
    const sequence = async () => {
      if (mobilemenuSelected === "OurWork") {
        mobilecontrolsMenu.start({
          height: "100%",
          duration: 0.5,
        });
        await mobilecontrolOurWork.start({
          height: "100%",
          duration: 0.1,
          flexDirection: "column",
        });
        mobileChildBlog.start({
          height: "150px",
          width: "100%",
        });
        mobileChildTeam.start({
          height: "100%",
          width: "200px",
        });
        mobilecontrolContact.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
        mobilecontrolServices.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
      }
      if (mobilemenuSelected === "contact") {
        mobilecontrolsMenu.start({ height: "100%", duration: 0.5 });
        mobileChildBlog.start({
          height: "100%",
          width: "200px",
        });
        mobileChildTeam.start({
          height: "140px",
          width: "100%",
        });
        await mobilecontrolContact.start({
          height: "100%",
          duration: 0.1,
          flexDirection: "column",
        });
        mobilecontrolOurWork.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
        mobilecontrolServices.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
      }
      if (mobilemenuSelected === "services") {
        mobilecontrolsMenu.start({ height: "100%", duration: 0.5 });
        await mobilecontrolServices.start({
          height: "100%",
          duration: 0.1,
          flexDirection: "column",
        });
        mobilecontrolOurWork.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
        mobileChildTeam.start({
          height: "100%",
          width: "200px",
        });
        mobileChildBlog.start({
          height: "100%",
          width: "200px",
        });
        mobilecontrolContact.start({
          height: "40px",
          duration: 0.5,
          flexDirection: "row",
        });
      }
      if (mobilemenuSelected === "home") {
        mobilecontrolsMenu.start({
          height: "120px",
          duration: 0.5,
        });

        mobilecontrolServices.start({
          height: "100%",
          duration: 0.5,
          flexDirection: "row",
        });
        mobilecontrolContact.start({
          height: "100%",
          duration: 0.5,
          flexDirection: "row",
        });
        mobilecontrolOurWork.start({
          height: "100%",
          duration: 0.5,
          flexDirection: "row",
        });
        mobileChildTeam.start({
          height: "100%",
          width: "200px",
        });
        mobileChildBlog.start({
          height: "100%",
          width: "200px",
        });
      }
    };

    sequence();
    return () => {
      mobilecontrolServices.stop();
    };
  }, [mobilemenuSelected, mobilecontrolServices]);

  useEffect(() => {
    const handleResize = () => {
      mobilesetMenuSelected("home");
      setMenuSelected("home");
      setMenu(false);
      mobilesetMenu(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" flex w-full h-screen overflow-hidden">
      <div onClick={() => setMenu(false)} className=" w-full hidden md:block">
        {menuSelected === "home" && <HomeBanner />}
      </div>
      <div onClick={() => setMenu(false)} className=" w-full block md:hidden">
        {menuSelected === "home" && <HomeBanner />}
      </div>
      <div
        className={`   overflow-hidden sm flex md:flex-row flex-col-reverse  right-0 absolute h-full justify-end  pointer-events-none 
      
      ${menuSelected === "home" ? "md:gap-5 gap-2" : ""}
      w-full`}
      >
        <div className=" hidden md:block ">
          {menuSelected === "home" && (
            <div className="text-primary-white h-full md:text-base flex flex-col justify-between items-end  text-sx  md:max-w-sm  max-w-60 mt-4 pointer-events-none ">
              <div>
                <span className=" text-primary-white font-bold">
                  OVERLAP is a global 360-degree Digital Marketing Agency,
                  specializing in profitable Digital Marketing solutions for
                  eBusinesses.
                </span>
                <br />
                <span>
                  Since 2017, OVERLAP leads in large-scale projects with
                  innovative digital marketing. Our mission is to enhance
                  business value through creative and effective use of Digital
                  Marketing Technologies.
                </span>
              </div>

              <div
                onClick={() => setMenu(!menu)}
                className=" mb-10 animate-pulse text-2xl pointer-events-auto hidden md:block cursor-pointer"
              >
                {menu ? "x" : "<<<"}
              </div>
            </div>
          )}
        </div>

        <div className=" md:hidden block ">
          {mobilemenuSelected === "home" && (
            <div className="text-primary-white md:text-base flex flex-col justify-between items-end  text-sx  md:max-w-sm  max-w-60 mt-4 pointer-events-none ">
              <div>
                <span className=" text-primary-white  font-bold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
                <br />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry&rsquo;s standard dummy text ever since the 1500s.
                </span>
              </div>

              <div
                onClick={() => setMenu(!menu)}
                className=" mb-10 animate-pulse text-2xl pointer-events-auto hidden md:block cursor-pointer"
              >
                {menu ? "x" : "<<<"}
              </div>
            </div>
          )}
        </div>

        <motion.div
          animate={controlsMenu}
          onMouseEnter={() => {
            setMenu(true);
          }}
          className=" cursor-pointer bg-black   z-10 pointer-events-auto md:flex hidden   w-[50px] h-full"
        >
          {menuSelected !== "home" && (
            <div
              onClick={() => {
                setMenuSelected("home");
                setMenu(false);
              }}
              className="  bg-black w-full  max-w-[250px] h-full"
            ></div>
          )}
          <motion.div
            animate={controlOurWork}
            onClick={() => setMenuSelected("OurWork")}
            className=" w-full h-full   text-3xl font-bold"
          >
            <div className="bg-primary-white w-full h-[200px] flex items-center justify-center ">
              {menu && <span className=" absolute -rotate-90">BLOG</span>}
            </div>
            <div className="bg-primary-yellow w-full h-full flex items-center justify-center">
              {menuSelected !== "OurWork" && (
                <>
                  {menu && (
                    <span className=" absolute whitespace-nowrap -rotate-90">
                      Our Work
                    </span>
                  )}
                </>
              )}
              {menuSelected === "OurWork" && <Gallery />}
            </div>
          </motion.div>
          <motion.div
            animate={controlServices}
            onClick={() => setMenuSelected("services")}
            className=" w-full h-full flex flex-col text-3xl font-bold "
          >
            <div className="bg-primary-green w-full h-full flex items-center justify-center">
              {menuSelected !== "services" && (
                <>
                  {menu && (
                    <span className=" absolute -rotate-90">Services</span>
                  )}
                </>
              )}

              {menuSelected === "services" && <Services />}
            </div>
          </motion.div>
          <motion.div
            animate={controlContact}
            onClick={() => setMenuSelected("contact")}
            className=" w-full h-full  flex flex-col text-3xl font-bold"
          >
            <div className="bg-primary-red w-full h-full flex items-center justify-center">
              {menuSelected !== "contact" && (
                <>
                  {menu && (
                    <span className=" absolute -rotate-90">Contact</span>
                  )}
                </>
              )}

              {menuSelected === "contact" && <Contact />}
            </div>
            <div className="bg-primary-white w-full h-[400px] flex items-center whitespace-nowrap justify-center ">
              {menuSelected !== "contact" && (
                <>
                  {menu && (
                    <span className=" absolute -rotate-90">Our Team</span>
                  )}
                </>
              )}

              {menuSelected === "contact" && <Team />}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={mobilecontrolsMenu}
          className=" cursor-pointer bg-black   z-10 pointer-events-auto flex-shrink overflow-hidden  md:hidden flex flex-col  w-full h-[70px]"
        >
          {mobilemenuSelected !== "home" && (
            <div
              onClick={() => {
                mobilesetMenuSelected("home");
                mobilesetMenu(false);
              }}
              className="  bg-black   h-[40px] w-full"
            ></div>
          )}
          <motion.div
            animate={mobilecontrolOurWork}
            onClick={() => mobilesetMenuSelected("OurWork")}
            className=" w-full h-full flex   text-xl font-bold"
          >
            <motion.div
              animate={mobileChildBlog}
              className="bg-primary-white  h-full  w-[200px] flex items-center justify-center "
            >
              <span className=" absolute ">BLOG</span>
            </motion.div>
            <div className="bg-primary-yellow w-full h-full flex items-center justify-center">
              {mobilemenuSelected !== "OurWork" && (
                <>
                  {mobilemenu && (
                    <span className=" absolute whitespace-nowrap -rotate-90">
                      Our Work
                    </span>
                  )}
                </>
              )}
              {mobilemenuSelected === "OurWork" && <Gallery />}
            </div>
          </motion.div>
          <motion.div
            animate={mobilecontrolServices}
            onClick={() => mobilesetMenuSelected("services")}
            className=" w-full h-full flex flex-col text-lg font-bold "
          >
            <div className="bg-primary-green w-full h-full flex items-center justify-center">
              {mobilemenuSelected !== "services" && (
                <span className=" absolute ">Services</span>
              )}

              {mobilemenuSelected === "services" && <Services />}
            </div>
          </motion.div>
          <motion.div
            animate={mobilecontrolContact}
            onClick={() => mobilesetMenuSelected("contact")}
            className=" w-full h-full  flex  text-lg font-bold"
          >
            <div className="bg-primary-red w-full h-full overflow-y-auto flex items-center justify-center">
              {mobilemenuSelected !== "contact" && (
                <span className=" absolute ">Contact</span>
              )}

              {mobilemenuSelected === "contact" && <Contact />}
            </div>
            <motion.div
              animate={mobileChildTeam}
              onClick={() => mobilesetMenuSelected("contact")}
              className="bg-primary-white h-full  w-[200px] flex items-center whitespace-nowrap justify-center "
            >
              <div className="bg-primary-white w-full  flex items-center justify-center">
                {mobilemenuSelected !== "contact" && (
                  <span className=" absolute ">Our Team</span>
                )}

                {mobilemenuSelected === "contact" && <Team />}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
