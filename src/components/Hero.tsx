import Button from "@/components/Button";
import { HeroProps } from "@/types/hero";
import React from "react";

export default function Hero({ title, getInTouch }: HeroProps) {
  return (
    <>
      <div className="relative bg-gradient-to-tr from-rose-500 to-amber-500 px-6 lg:px-8">
        <div
          data-aos="fade-in"
          className="py-auto relative z-10 mx-auto h-screen max-w-3xl pt-28 sm:h-auto sm:pt-48 sm:pb-40 "
        >
          <h1 className="z-20 pt-24 text-[55px] font-bold leading-[1] tracking-tight text-white sm:pt-0 sm:text-center sm:text-6xl">
            {title}
          </h1>

          <div className="mt-8 flex gap-x-4 sm:justify-center">
            {getInTouch &&
              (getInTouch === true ? (
                <Button variant="secondary" bouncy={true} shadow="medium">
                  <a href="#more">
                    Get in touch
                    <span className="pl-1 text-orange-600" aria-hidden="true">
                      &#8599;
                    </span>
                  </a>
                </Button>
              ) : null)}
            <Button variant="tertiary" bouncy={true} shadow="medium">
              <a href="#more">
                Learn More
                <span className="pl-1 text-zinc-100" aria-hidden="true">
                  &darr;
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
