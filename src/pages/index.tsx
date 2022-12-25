import Button from "@/components/Button";
import Hero from "@/components/Hero";
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
    </>
  );
};

export default Home;
