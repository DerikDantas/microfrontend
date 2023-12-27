import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./components/Cart";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Transition.Root show={menuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>

                    <button className="h-6 w-6" aria-hidden="true">
                      X
                    </button>
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {[{ name: "Pedidos", href: "/orders" }].map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white border-b border-gray-200">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="ml-4 flex lg:ml-0">
              <Link to="/" className="font-bold text-gray-700 text-2xl">
                Shop.
              </Link>
            </div>

            <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
              {[{ name: "Pedidos", href: "/orders" }].map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    to={page.href}
                    className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 "
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="ml-auto flex items-center">
              <div className="ml-4 flow-root lg:ml-6">
                <Cart />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
