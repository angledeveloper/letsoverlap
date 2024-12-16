import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="  h-full animate-fade overflow-y-auto">
      <span className="text-center  w-full flex lg:mt-7 my-3 px-3  items-center justify-center text-[32px] font-bold">
        What we can <br className=" block lg:hidden" />
        do for you
      </span>
      <div class=" flex flex-wrap m-auto w-full max-w-[90%]   justify-center   items-stretch  gap-2  ">
        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/ser1.png"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>

          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium">E-Commerce & M-Commerce: </p>
            <p className="text-sm mt-2  font-normal">
              We are expert in setting up your online shopping application
              (E-Commerce), Shopify , Amazon Merchant and various other
              M-Commerce applications further increasing your client base with
              our targeted shopping Ads across Globe
            </p>
          </div>
        </div>

        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/ser2.png"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium">CMS & CRO</p>
            <p className="text-sm mt-2  font-normal">
              We bring a wealth of experience deploying CMS solutions and can
              serve as an invaluable partner in determining which CMS best meets
              your business, technical, and functional requirements.
              Conversation retention optimisation is a cutting edge solution for
              most of your questions these days! We create an exact strategy for
              your conversations to be retained and our approach will always be
              helpful in creating a rich user experience for your customers
            </p>
          </div>
        </div>

        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/ser3.png"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium">SEO</p>
            <p className="text-sm mt-2  font-normal">
              Offering complete SEO Solutions, and internet Marketing
              services. We are a leading SEO Company in India, providing
              effective Search Engine Optimization’s services in right phases{" "}
            </p>
          </div>
        </div>

        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/ser4.png"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium"> Advertising & PR: </p>
            <p className="text-sm mt-2  font-normal">
              We help you build your professional relations with your audience &
              key partners through our Advertising services (Paid social &
              Google) and if required some Corporate/Social PR services too.
            </p>
          </div>
        </div>

        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/social.jpg"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium">Social Media Marketing </p>
            <p className="text-sm mt-2  font-normal">
              Our vision for Social Media Marketing is “today’s necessity for a
              niche business model & building a community”
            </p>
          </div>
        </div>

        <div class="flex flex-col min-w-[250px] bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md   w-full max-w-[400px] ">
          <div className=" relative w-full aspect-video">
            <Image
              src="/branding.jpg"
              alt=""
              fill
              className=" object-cover object-center "
            />
          </div>
          <div className="flex flex-col items-start mt-2">
            <p className="text-2xl  font-medium">
              Branding & Brand Positioning 
            </p>
            <p className="text-sm mt-2  font-normal">
              From designing your logo to setting up your entire brand
              guidelines, we help your brand to position right from scratch or
              on the run!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
