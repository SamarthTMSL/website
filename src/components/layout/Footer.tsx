import Button from "@/components/Button";
import Logo from "@/components/Logo";

function Footer() {
  return (
    <footer className="relative bg-black text-zinc-600">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-zinc-900 md:justify-start">
            <Logo className="h-8 text-white" />
          </a>
          <p className="mt-2 text-sm text-zinc-500">Empowering the Youth</p>
          <p className="mt-2 text-sm text-zinc-500">
            EM-4/1, Sector-V, Salt Lake, <br />
            Kolkata : 700 091
            <br />
            samarth.tmsl.css@email.com
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-10 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-zinc-100">
              QUICK LINKS
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">About</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Works</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Events</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Resources</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-zinc-100">
              SAMARTH TMSL
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Our Team</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Sponsors</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-zinc-100">
              COMMUNITY
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">LinkedIn</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Facebook</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Instagram</a>
              </li>
              <li>
                <a className="text-zinc-600 hover:text-zinc-400">Twitter</a>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-2/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-zinc-200">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
              <div className="relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0 xl:mr-4">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="email@example.com"
                  className="w-full rounded-md border border-zinc-300 bg-white py-1 px-3 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:bg-transparent focus:text-white focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <Button variant="primary" bouncy={true}>
                Subscribe
              </Button>
            </div>
            <p className="mt-2 text-center text-sm text-zinc-500 md:text-left">
              Don’t miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            &copy; {new Date().getFullYear()} Samarth TMSL. All rights reserved.
            This website is made with ❤️ by TechTeam@Samarth
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-zinc-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-zinc-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-zinc-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-zinc-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
