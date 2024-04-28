import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="  h-full animate-fade overflow-y-auto">
      <span className="text-center  w-full flex lg:mt-7 my-3 px-3  items-center justify-center text-[32px] font-bold">
        What we can <br className=" block lg:hidden" />
        do for you
      </span>
      <div class="grid aspect-square lg:max-h-[90vh]   gap-2 items-center max-w-[98%]   m-auto justify-items-center p-2">
        <div class="grid lg:grid-cols-2  justify-items-center  gap-2  ">
          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md  h-full w-full ">
            <div className=" relative  max-h-[42vh] w-full aspect-video">
              <Image src="/ser1.png" alt="" fill className=" " />
            </div>

            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">E-Commerce & M-Commerce: </p>
              <p className="text-sm mt-4 line-clamp-3 font-normal">
                We are expert in setting up your online shopping application
                (E-Commerce), Shopify , Amazon Merchant and various other
                M-Commerce applications further increasing your client base with
                our targeted shopping Ads across Globe.{" "}
              </p>
              <span className="font-bold"> More{">"}</span>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md  h-full w-full ">
            <div className=" relative  max-h-[42vh] w-full aspect-video">
              <Image src="/ser2.png" alt="" fill className=" " />
            </div>
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">CMS & CRO</p>
              <p className="text-sm mt-4 line-clamp-3 font-normal">
                With extensive CMS deployment experience, we guide you to the
                ideal CMS for your business. Our specialty lies in cutting-edge
                conversation retention optimization, ensuring a rich user
                experience.
              </p>
              <span className="font-bold"> More{">"}</span>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md  h-full w-full ">
            <div className=" relative  max-h-[42vh] w-full aspect-video">
              <Image src="/ser3.png" alt="" fill className=" " />
            </div>
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium">SEO</p>
              <p className="text-sm mt-4 line-clamp-3 font-normal">
                Offering complete SEO Solutions, and internet Marketing
                services. We are a leading SEO Company in India, providing
                effective Search Engine Optimization’s services in right phases{" "}
              </p>
              <span className="font-bold"> More{">"}</span>
            </div>
          </div>

          <div class="flex flex-col bg-primary-white hover:bg-primary-navy text-primary-navy hover:text-[#6AE3F3] p-4 rounded-md  h-full w-full ">
            <div className=" relative  max-h-[42vh] w-full aspect-video">
              <Image src="/ser4.png" alt="" fill className=" " />
            </div>
            <div className="flex flex-col items-start mt-4">
              <p className="text-2xl  font-medium"> Advertising & PR: </p>
              <p className="text-sm mt-4 line-clamp-3 font-normal">
                We help you build your professional relations with your audience
                & key partners through our Advertising services (Paid social &
                Google) and if required some Corporate/Social PR services too.
              </p>
              <span className="font-bold"> More{">"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
