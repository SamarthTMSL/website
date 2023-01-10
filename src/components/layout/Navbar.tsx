import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

const navigation = [
  { name: "About", href: "/#aim" },
  { name: "Events", href: "/events" },
  { name: "Works", href: "/#works" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-zinc-100/50 px-4 py-4 shadow-sm backdrop-blur-xl sm:px-6 sm:py-3 lg:px-8">
        <div className="container mx-auto">
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Samarth TMSL"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/">
                <Logo
                  className="h-5 w-auto text-black hover:text-zinc-800"
                  aria-label="Samarth TMSL logo"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-block font-semibold text-zinc-900 hover:text-orange-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Button variant="secondary" bouncy={true} shadow="medium">
                <a href="#more">Get in touch</a>
              </Button>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              as="div"
              className="fixed inset-0 z-50 overflow-y-auto bg-white px-4 py-4 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <Link href="/">
                    <Logo className="h-5 w-auto" />
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root px-2">
                <div className="-my-6 divide-y divide-zinc-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-zinc-900 hover:bg-zinc-400/10"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
}
