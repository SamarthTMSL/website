import Button from "@/components/Button";
import Hero from "@/components/Hero";
import {
  Cog6ToothIcon,
  LifebuoyIcon,
  LightBulbIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero title="Empowering Youth for the Future" getInTouch={true} />
      <div id="more" className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div data-aos="fade-up">
              <h1 className="pb-4 text-center text-lg font-medium tracking-tight sm:text-2xl">
                WHO ARE WE?
              </h1>
              <h2 className="mt-6 text-center text-2xl text-zinc-600 sm:text-4xl">
                <b>SAMARTH</b>, the educational society of Techno Main Salt
                Lake, founded in 2019. <b>SAMARTH</b> literally means competent,
                strong and powerful.
              </h2>
              <div className="mt-8 flex justify-center gap-x-4">
                <Button variant="primary" bouncy={true} shadow="medium">
                  <a href="#aim">
                    Our Aim
                    <span className="pl-1 text-orange-100" aria-hidden="true">
                      &darr;
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="aim" className="relative px-6 sm:-scroll-m-20 lg:px-8">
        <div className="mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <div data-aos="fade-up" className="mx-auto max-w-4xl">
                <h1 className="pb-4 text-center text-lg font-medium tracking-tight sm:text-2xl">
                  OUR AIM
                </h1>
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                  Empowering the Youth
                </h1>
                <p className="mt-6 text-center text-lg leading-8 text-zinc-600">
                  Building self confidence. Work in the direction of self growth
                  and transformation. Organizing various kinds of events like
                  extempore, Group discussion,mock interview,etc. Holistic
                  development of an individual through :
                </p>
              </div>

              <div className="mt-8 flex flex-wrap space-y-6 sm:space-y-0">
                <div data-aos="zoom-in" className="sm:p-4 md:w-1/2 xl:w-1/4">
                  <div className="h-full rounded-lg border border-zinc-200 p-6 transition-all duration-200 ease-in-out hover:shadow-xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                      <LightBulbIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mb-2 text-lg font-medium text-zinc-900">
                      Strategy
                    </h2>
                    <p className="text-base leading-relaxed text-zinc-500">
                      A strategy describes how the ends (goals) will be achieved
                      by the means (resources).
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" className="sm:p-4 md:w-1/2 xl:w-1/4">
                  <div className="h-full rounded-lg border border-zinc-200 p-6 transition-all duration-200 ease-in-out hover:shadow-xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      <PaintBrushIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mb-2 text-lg font-medium text-zinc-900">
                      Design
                    </h2>
                    <p className="text-base leading-relaxed text-zinc-500">
                      Graphic design is the craft of planning and creating
                      visual content to communicate ideas and messages.
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" className="sm:p-4 md:w-1/2 xl:w-1/4">
                  <div className="h-full rounded-lg border border-zinc-200 p-6 transition-all duration-200 ease-in-out hover:shadow-xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                      <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mb-2 text-lg font-medium text-zinc-900">
                      Grooming & Development
                    </h2>
                    <p className="text-base leading-relaxed text-zinc-500">
                      Grooming is the secret of real elegance. We believe in
                      learning by action!
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" className="sm:p-4 md:w-1/2 xl:w-1/4">
                  <div className="h-full rounded-lg border border-zinc-200 p-6 transition-all duration-200 ease-in-out hover:shadow-xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                      <LifebuoyIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mb-2 text-lg font-medium text-zinc-900">
                      Help & Supports
                    </h2>
                    <p className="text-base leading-relaxed text-zinc-500">
                      Support plays a huge role in any journey. &quot;A mentor
                      is someone who allows you to see the hope within
                      yourself&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-tr from-rose-500 to-amber-500 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-32 sm:pb-40">
          <div>
            <div data-aos="fade-up">
              <div className="mx-auto max-w-4xl">
                <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Our Motto{" "}
                </h1>
                <p className="mt-6 text-center text-lg leading-8 text-white/80">
                  Youth empowerment is a process, to encourage youth by all
                  means: Personality development, Skill development, Grooming
                  and Mentorship, Guidance in competitive exams like
                  UPSC-CSE/UPSC, IES/GATE, Mental Health,etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
