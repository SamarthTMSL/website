import Heading from "@/components/Heading";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import events from "../data/events.json";

const EventsPage: NextPage = () => {
  return (
    <>
      <Heading title="Events" getInTouch={false} />
      <div className="relative bg-zinc-50 px-6 sm:-scroll-m-20 lg:px-8">
        <div className="mx-auto max-w-6xl pt-20 pb-32 sm:pt-32 sm:pb-40">
          {events.map((event) => (
            <div key={event.id} className="py-10">
              <div data-aos="fade-up" className="mx-auto max-w-4xl">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                  {event.title}
                </h1>
                <p className="mt-6 text-center text-lg leading-8 text-zinc-600">
                  {event.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap space-y-6 sm:space-y-0">
                {event.eventsList.map((event) => (
                  <div
                    key={event.id}
                    data-aos="zoom-in"
                    className="sm:p-4 md:w-1/2 xl:w-1/3"
                  >
                    <div className="h-full rounded-xl border border-zinc-200 shadow-md transition-all duration-200 ease-in-out hover:shadow-2xl">
                      <div className="mb-4 inline-flex aspect-square items-center justify-center">
                        <Image
                          src={event.imageurl}
                          alt="Picture of the author"
                          width={500}
                          height={500}
                          className="rounded-t-xl object-cover object-center"
                          placeholder="blur"
                          blurDataURL={event.imageurl}
                          loading="lazy"
                        />
                      </div>
                      <div className="px-6 pb-6">
                        <h2 className="mb-2 text-lg font-medium text-zinc-900">
                          {event.title}
                        </h2>
                        <p className="text-base leading-relaxed text-zinc-400">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
