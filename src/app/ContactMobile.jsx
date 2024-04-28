import React from "react";
import Image from "next/image";

const ContactMobile = () => {
  return (
    <div className=" h-full overflow-y-auto animate-fade w-full px-3">
      <div className="flex flex-col w-full ">
        <span className=" mt-12 text-[32px] text-primary-navy md:p-9 p-2 font-bold">
          Let’s get in touch
        </span>
        <span className="text-2xl  font-normal text-primary-navy p-2 md:p-9">
          We can build something <br />
          <span className="text-primary-white font-serif font-bold italic ">
            great together
          </span>
        </span>

        <form className="mt-4">
          <div>
            <input
              type="text"
              placeholder="Hi my name is...."
              className="p-4 w-full rounded-t-xl placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray opacity-100"
            />
          </div>

          <div className=" opacity-90">
            <input
              type="email"
              placeholder="My email is...."
              className="p-4 w-full placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
            />
          </div>

          <div className=" opacity-80 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray">
            <input
              type="tel"
              placeholder="You can call me on...."
              className="p-4 w-full placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
            />
          </div>

          <input
            type="text"
            placeholder="The subject of this...."
            className="p-4 text-primary-gray placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray w-full opacity-70 "
          />

          <div className="opacity-60">
            <textarea
              placeholder="To tell you in details..."
              rows="3"
              className=" p-4 w-full  opacity-100 placeholder:font-sans placeholder:font-normal placeholder:text-sm  placeholder:text-primary-gray text-primary-gray"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" p-4 bg-primary-navy text-sm relative -top-2 h-[68px] w-full font-normal rounded-b-xl text-white "
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Icons */}
      {/* You can replace these with actual icons */}
      <div className="flex flex-row justify-center items-end pt-4 space-x-10">
        <Image src="/iconoir_x.png" alt="" width={24} height={24} />
        <Image src="/lets-icons_insta.png" alt="" width={24} height={24} />
        <Image src="/ic_baseline-facebook.png" alt="" width={24} height={24} />
        <Image src="/mdi_linkedin.png" alt="" width={24} height={24} />
        <Image src="/ic_baseline-email.png" alt="" width={24} height={24} />
      </div>

      <div className=" md:hidden">
        <br />
        <br />
      </div>
    </div>
  );
};

export default ContactMobile;
