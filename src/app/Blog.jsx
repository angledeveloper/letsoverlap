import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div className="md:flex  animate-fade overflow-y-auto  items-center justify-between px-2 h-full">
      <div className="flex flex-col md:flex-row gap-2 md:items-center max-md:mt-2  md:justify-around px-2 h-full">
        <p className=" mt-9 w-full block md:hidden ">Blogs</p>
        <div className=" md:max-w-[40%] w-full justify-center mt-6 md:mt-0 items-center flex flex-col md:flex-row aspect-video gap-5">
          <Image
            className="block md:hidden"
            height={177}
            width={375}
            src="/blog1.png"
            alt="Blog"
          />
          <Image
            className="md:block  hidden"
            height={57}
            width={142}
            src="/blog1.png"
            alt="Blog"
          />

          <div className=" text-sm  line-clamp-3 font-medium md:text-base max-h-full ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            <span className=" font-semibold">Read More</span>
          </div>
        </div>
        <div className=" mt-4 md:mt-0 md:max-w-[40%] w-full justify-center items-center flex flex-col md:flex-row aspect-video gap-5">
          <Image
            className="block md:hidden"
            height={177}
            width={375}
            src="/blog2.png"
            alt="Blog"
          />
          <Image
            className="md:block  hidden"
            height={57}
            width={142}
            src="/blog2.png"
            alt="Blog"
          />

          <div className=" text-sm  line-clamp-3  font-medium md:text-base max-h-full ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            <span className=" font-semibold">Read More</span>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex font-bold items-center justify-center w-fit  text-2xl md:text-3xl">
        <p className=" -rotate-90">Blogs</p>
      </div>
    </div>
  );
}
