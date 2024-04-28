import React from "react";
import Image from "next/image";

export default function TeamMobile() {
  return (
    <div className="h-full overflow-y-auto animate-fade w-full px-8">
      <div className="flex gap-2 ">
        <p className=" mt-9">Our Team</p>
      </div>
      <div className="flex flex-wrap justify-center mt-9 gap-10">
        <div className=" flex flex-col gap-2  justify-center   ">
          <Image height={184} width={143} src="/ourteam.png" alt="Our Team" />
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  justify-center   ">
          <Image height={184} width={143} src="/ourteam.png" alt="Our Team" />
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  justify-center   ">
          <Image height={184} width={143} src="/ourteam.png" alt="Our Team" />
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2  justify-center   ">
          <Image height={184} width={143} src="/ourteam.png" alt="Our Team" />
          <div>
            <p className=" font-bold text-sm">Name</p>
            <p className="  text-xs">Designation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
