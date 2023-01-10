import Button from "@/components/Button";
import { HeroProps } from "@/types/hero";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const particlesOptions = {
  //options
  particles: {
    number: {
      value: 190,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.8,
        sync: true,
      },
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.9,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      random: false,
      straight: false,
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retinaDetect: true,
};

export default function Hero({ title, getInTouch }: HeroProps) {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <>
      <div className="relative bg-gradient-to-tr from-rose-500 to-amber-500 px-6 lg:px-8">
        <Particles
          className="absolute"
          init={particlesInit}
          options={particlesOptions}
        />
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
