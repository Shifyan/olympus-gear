"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
Link;
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div>
      <div className="bg-white rounded-[12px]">
        <div
          className={`flex  items-center transition-[padding] duration-500 px-[16px] lg:px-[32px] lg:py-[25px] ${
            isOpen ? "pt-[16px] " : "py-[16px] "
          }`}
        >
          <div className="hidden lg:flex basis-1/3">
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="py-[3px] text-[16px] link link-hover">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/" className="py-[3px] text-[16px] link link-hover">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/" className="py-[3px] text-[16px] link link-hover">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/" className="py-[3px] text-[16px] link link-hover">
                  Weather
                </Link>
              </li>
            </ul>
          </div>

          <div className="basis-1/3 lg:hidden">
            <div>
              <Image
                onClick={() => setIsOpen(!isOpen)}
                src="/menu.png"
                alt="bars"
                width={19}
                height={19}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Link
              href="/"
              className="text-[20px] lg:text-[32px] font-bold leading-none inline-block"
            >
              OLYMPUS
            </Link>
          </div>
          <div className="basis-1/3 flex justify-end items-center gap-4">
            <Image
              className="max-lg:hidden hover:cursor-pointer"
              src="/search.png"
              width={22}
              height={22}
              alt="Search"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
              }}
            ></Image>
            {isSearchOpen && (
              <input
                type="text"
                className="input h-[30px] transition-all duration-300 opacity-0 translate-y-[-5px] data-[show=true]:opacity-100 data-[show=true]:translate-y-0"
                placeholder="Type here"
                data-show={isSearchOpen}
              />
            )}
            <Link href="/">
              <Image src="/User.png" alt="User" width={22} height={22}></Image>
            </Link>
          </div>
        </div>
        <div
          className={` overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="menu w-full">
            <li className="transition-opacity duration-700 delay-100">
              <Link className="flex justify-center" href="/">
                Trending
              </Link>
            </li>
            <li className="transition-opacity duration-700 delay-200">
              <Link className="flex justify-center" href="/">
                Men
              </Link>
            </li>
            <li className="transition-opacity duration-700 delay-300">
              <Link className="flex justify-center" href="/">
                Women
              </Link>
            </li>
            <li className="transition-opacity duration-700 delay-400">
              <Link className="flex justify-center" href="/">
                Gears
              </Link>
            </li>
            <li className="transition-opacity duration-700 delay-400">
              <Link className="flex justify-center" href="/">
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
