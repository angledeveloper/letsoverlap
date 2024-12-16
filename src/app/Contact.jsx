import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" h-full animate-fade overflow-y-scroll w-full">
      <div className="flex lg:flex-row flex-col mt-2 md:mt-6 w-full gap-2 justify-between">
        <div className="flex flex-col gap-2 lg:gap-7 w-full  p-3 ">
          <span className="text-4xl text-primary-navy  font-bold">
            Let’s get in touch
          </span>
          <span className="lg:text-4xl  text-3xl font-normal text-primary-navy ">
            We can build something <br />
            <span className="text-primary-white font-serif font-bold italic ">
              great together
            </span>
          </span>

          <form className=" flex w-full flex-col  mt-8">
            <div className=" ">
              <input
                type="text"
                placeholder="Hi my name is...."
                className="p-4 w-full lg:w-[70%] rounded-t-xl outline-none h-18 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray opacity-100"
              />
            </div>

            <div className=" opacity-90 ">
              <input
                type="text"
                placeholder="My country is...."
                className="p-4 w-full lg:w-[70%]  outline-none h-18 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray opacity-100"
              />
            </div>

            <div className=" opacity-85">
              <input
                type="email"
                placeholder="My email is...."
                className="p-4 w-full lg:w-[70%] placeholder:font-sans h-18 outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              />
            </div>

            <div className=" opacity-80 placeholder:font-sans  outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray">
              <input
                type="tel"
                placeholder="You can call me on...."
                className="p-4 w-full lg:w-[70%] placeholder:font-sans h-18 outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              />
            </div>

            <div className=" opacity-75 placeholder:font-sans  outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray">
              <input
                type="text"
                placeholder="I heard about you on...."
                className="p-4 w-full lg:w-[70%] placeholder:font-sans h-18 outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
              />
            </div>

            <div className=" flex w-full ">
              <input
                type="text"
                placeholder="The subject of this...."
                className="p-4 text-primary-gray h-18 placeholder:font-sans outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray w-full lg:w-[70%] opacity-70 "
              />

              <button
                type="submit"
                className=" bg-primary-navy text-sm hidden lg:block  h-18 lg:w-[30%] font-normal outline-none rounded-tr-xl text-white "
              >
                Send
              </button>
            </div>

            <textarea
              placeholder="To tell you in details..."
              className="p-4 opacity-60 w-[100%] h-32 resize-none lg:rounded-b-xl placeholder:font-sans outline-none placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
            ></textarea>

            <button
              type="submit"
              className=" bg-primary-navy text-sm lg:hidden block  p-5 h-18  font-normal outline-none rounded-b-xl text-white "
            >
              Send
            </button>
          </form>
        </div>

        <div className="lg:flex  hidden w-full md:max-w-sm md:flex-col  gap-8 flex-row  justify-start md:justify-start  items-start ">
          <span className="text-base font-normal text-primary-navy">
            And the list goes on and on! <br /> Let’s collaborate on the macro
            and micro influencers marketing plans, <br />
            that will sure be a buzz in the ears. <br />
          </span>
          <span className="text-base  font-normal text-primary-navy">
            Email
          </span>
          <span className="text-base  font-normal text-primary-navy 2">
            Phone
          </span>
        </div>

        <div className=" p-2 hidden md:flex  mt-2 lg:hidden w-full  md:flex-col  gap-8 flex-row  justify-start md:justify-start  items-start ">
          <span className="text-base font-normal text-primary-navy">
            And the list goes on and on! Let’s collaborate on the macro and
            micro influencers marketing plans, that will sure be a buzz in the
            ears.
          </span>
          <div className=" flex gap-10">
            <span className="text-base  font-normal text-primary-navy">
              Email
            </span>
            <span className="text-base  font-normal text-primary-navy 2">
              Phone
            </span>
          </div>
        </div>

        <div className="flex lg:w-fit  right-2 top-6 flex-row lg:flex-col justify-center items-center p-6 gap-7 w-full ">
          <Image src="/iconoir_x.png" alt="" width={32} height={32} />
          <Image src="/lets-icons_insta.png" alt="" width={32} height={32} />
          <Image
            src="/ic_baseline-facebook.png"
            alt=""
            width={32}
            height={32}
          />
          <Image src="/mdi_linkedin.png" alt="" width={32} height={32} />
          <Image src="/ic_baseline-email.png" alt="" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
