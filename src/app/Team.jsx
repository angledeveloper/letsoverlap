import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className=" md:px-6 flex animate-fade w-full justify-between items-center h-full">
      <div className="   flex flex-col md:flex-row  gap-3 p-1 md:px-2  h-full w-full md:w-9/12 overflow-x-auto overflow-y-auto">
        <h2 className=" md:hidden">Our Team</h2>
        <div className=" grid overflow-y-auto grid-cols-2 md:gap-3 max-md:justify-items-center max-md:w-full max-md:justify-between md:grid-cols-none  md:grid-flow-col">
          <div className=" flex flex-col gap-2  justify-center   ">
            <div className="relative    h-[190px] w-[150px]   md:h-[126px]  md:w-[96px]  ">
              <Image
                src="/Rectangle 22.png"
                fill
                className="rounded-sm md:rounded-sm"
                alt="team"
              />
            </div>
            <div>
              <p className=" font-bold text-sm">Name</p>
              <p className="  text-xs">Designation</p>
            </div>
          </div>
          <div className=" flex flex-col gap-2  justify-center   ">
            <div className="relative    h-[190px] w-[150px]   md:h-[126px]  md:w-[96px]  ">
              <Image
                src="/Rectangle 22.png"
                fill
                className="rounded-sm md:rounded-sm"
                alt="team"
              />
            </div>
            <div>
              <p className=" font-bold text-sm">Name</p>
              <p className="  text-xs">Designation</p>
            </div>
          </div>
          <div className=" flex flex-col gap-2  justify-center   ">
            <div className="relative    h-[190px] w-[150px]   md:h-[126px]  md:w-[96px]  ">
              <Image
                src="/Rectangle 22.png"
                fill
                className="rounded-sm md:rounded-sm"
                alt="team"
              />
            </div>
            <div>
              <p className=" font-bold text-sm">Name</p>
              <p className="  text-xs">Designation</p>
            </div>
          </div>
          <div className=" flex flex-col gap-2  justify-center   ">
            <div className="relative    h-[190px] w-[150px]   md:h-[126px]  md:w-[96px]  ">
              <Image
                src="/Rectangle 22.png"
                fill
                className="rounded-sm md:rounded-sm"
                alt="team"
              />
            </div>
            <div>
              <p className=" font-bold text-sm">Name</p>
              <p className="  text-xs">Designation</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex font-bold  items-center justify-center w-fit  text-2xl md:text-3xl">
        <p className=" -rotate-90"> Our Team</p>
      </div>
    </div>
  );
}
