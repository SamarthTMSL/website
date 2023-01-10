import Button from "@/components/Button";
import Hero from "@/components/Hero";
import {
  Cog6ToothIcon,
  LifebuoyIcon,
  LightBulbIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import CountUp from "react-countup";

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
      <div id="works" className="relative px-6 sm:-scroll-m-20 lg:px-8">
        <div className="mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <div data-aos="fade-up" className="mx-auto max-w-4xl">
                <h1 className="pb-4 text-center text-lg font-medium tracking-tight sm:text-2xl">
                  WORKS
                </h1>
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                  View our works below to see our design and way of research &
                  development
                </h1>
                <p className="mt-6 text-center text-lg leading-8 text-zinc-600">
                  Samarth posts weekly content about the recent ongoings in the
                  world. It ranges from exciting content and stunning graphics
                  to spine-chilling facts and unmatched visuals.
                </p>
              </div>
              <section className="body-font text-zinc-600">
                <div
                  data-aos="fade-up"
                  className="container mx-auto flex flex-col items-center py-10 pt-16 sm:px-5 md:flex-row"
                >
                  <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                    <Image
                      className="rounded-2xl object-cover object-center"
                      alt="hero"
                      src="/images/works/hacktoberfest.jpeg"
                      width={500}
                      height={500}
                      placeholder="blur"
                      blurDataURL="/images/works/hacktoberfest.jpeg"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                    <p className="mb-4 text-sm font-semibold uppercase text-zinc-500">
                      HACKTOBERFEST 2022
                    </p>
                    <h1 className="mb-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
                      Hacktoberfest 2022
                      <br className="hidden lg:inline-block" />
                      Status: HACKED!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                      Team Samarth is happy to share that we have{" "}
                      <b>&apos;Hacked 🚀 the Hacktoberfest 2022&apos;</b> with a
                      blast of over 300+ Pull Request over our 4 repositories,
                      helping more than 100 students PAN India.
                    </p>
                    <div className="flex justify-center">
                      <Button variant="primary" bouncy={true} shadow="medium">
                        View Work
                        <span
                          className="pl-1 text-orange-100"
                          aria-hidden="true"
                        >
                          &#8599;
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="container my-10 mx-auto flex flex-col items-center py-10 sm:flex-row sm:px-5"
                >
                  <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
                    <p className="mb-4 text-sm font-semibold uppercase text-zinc-500">
                      DEVFEST KOLKATA 2022
                    </p>
                    <h1 className="mb-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
                      Official Community Partner
                      <br className="hidden lg:inline-block" />
                      For DevFest Kolkata 2022!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                      Do you envision impacting the lives of millions through
                      the lens of technology? If yes, we have a piece of
                      excellent news for you all. Team Samarth is elated to
                      officially announce that we are now Community Partner of
                      the prestigious DevFest Kolkata 2022🔥.
                    </p>
                    <div className="flex w-full items-end justify-center md:justify-start">
                      <Button variant="primary" bouncy={true} shadow="medium">
                        View Work
                        <span
                          className="pl-1 text-orange-100"
                          aria-hidden="true"
                        >
                          &#8599;
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="order-first mb-10 w-5/6 sm:order-none md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                    <span>
                      <Image
                        alt="hero"
                        src="/images/works/dev.jpg"
                        className="rounded-2xl object-cover object-center"
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="/images/works/dev.jpg"
                        loading="lazy"
                      />
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-tr from-rose-500 to-amber-500 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-28 sm:pb-28">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Events{" "}
            </h1>
            <div className="container mx-auto pt-12 text-white">
              <div className="flex flex-col text-center sm:flex-row">
                <div className="p-4 sm:w-1/3">
                  <CountUp
                    start={0}
                    end={1500}
                    duration={2}
                    separator=","
                    suffix="+"
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                    className="title-font text-5xl font-bold text-white sm:text-6xl"
                  />
                  <p className="pt-3 uppercase leading-relaxed text-white/70">
                    Participation in our events
                  </p>
                </div>
                <div className="p-4 sm:w-1/3">
                  <CountUp
                    start={0}
                    end={10000}
                    duration={2}
                    separator=","
                    suffix="+"
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                    className="title-font text-5xl font-bold text-white sm:text-6xl"
                  />
                  <p className="pt-3 uppercase leading-relaxed text-white/70">
                    Our reach including associated reach
                  </p>
                </div>
                <div className="p-4 sm:w-1/3">
                  <CountUp
                    start={0}
                    end={10000}
                    duration={2}
                    separator=","
                    suffix="+"
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                    className="title-font text-5xl font-bold text-white sm:text-6xl"
                  />
                  <p className="pt-3 uppercase leading-relaxed text-white/70">
                    Youths engaged in Samarth Activities
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-x-4">
              <Button variant="secondary" bouncy={true} shadow="medium">
                View All
                <span className="pl-1 text-orange-600" aria-hidden="true">
                  &#8599;
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
