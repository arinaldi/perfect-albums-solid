import { Component, createSignal, For } from 'solid-js';
import { Link, useLocation } from 'solid-app-router';

import { ROUTES, ROUTES_ADMIN } from '../constants';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const NavBar: Component = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const hasAuth = false;
  const isDarkMode = false;

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav class="bg-gray-800 dark:bg-gray-700">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onclick={toggleMenu}
              type="button"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon
                className={`${isMenuOpen() ? 'hidden' : 'block'} h-6 w-6`}
              />
              <CloseIcon
                className={`${isMenuOpen() ? 'block' : 'hidden'} h-6 w-6`}
              />
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-xl text-white">Perfect Albums</span>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <For each={ROUTES}>
                  {({ href, label }) => (
                    <Link href={href}>
                      <a
                        class={`${
                          pathname === href
                            ? 'text-white font-semibold'
                            : 'text-gray-300 font-medium'
                        } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md dark:hover:bg-gray-800`}
                      >
                        {label}
                      </a>
                    </Link>
                  )}
                </For>
                {hasAuth && (
                  <Link href={ROUTES_ADMIN.base.href}>
                    <a
                      class={`${
                        pathname === ROUTES_ADMIN.base.href
                          ? 'text-white font-semibold'
                          : 'text-gray-300 font-medium'
                      } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md dark:hover:bg-gray-800`}
                    >
                      {ROUTES_ADMIN.base.label}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <button
            class="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            // onclick={toggleDarkMode}
            type="button"
          >
            <span class="sr-only">Toggle dark mode</span>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <div class="hidden absolute inset-y-0 right-0 sm:flex sm:items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
            {hasAuth ? (
              <div
                // onclick={logout}
                class="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium dark:hover:bg-gray-800"
              >
                Sign Out
              </div>
            ) : (
              <Link href="/signin">
                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium dark:hover:bg-gray-800">
                  Sign In
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div class={`${isMenuOpen() ? 'block' : 'hidden'} sm:hidden`}>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <For each={ROUTES}>
            {({ href, label }) => (
              <Link href={href}>
                <a
                  class={`${
                    pathname === href
                      ? 'text-white font-semibold'
                      : 'text-gray-300 font-medium'
                  } hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base`}
                  onclick={closeMenu}
                >
                  {label}
                </a>
              </Link>
            )}
          </For>
          {hasAuth ? (
            <>
              <Link href={ROUTES_ADMIN.base.href}>
                <a
                  class={`${
                    pathname === ROUTES_ADMIN.base.href
                      ? 'text-white font-semibold'
                      : 'text-gray-300 font-medium'
                  } hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base`}
                  onclick={closeMenu}
                >
                  {ROUTES_ADMIN.base.label}
                </a>
              </Link>
              <div
                onclick={() => {
                  closeMenu();
                  // logout();
                }}
                class="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Out
              </div>
            </>
          ) : (
            <Link href="/signin">
              <a
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onclick={closeMenu}
              >
                Sign In
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
