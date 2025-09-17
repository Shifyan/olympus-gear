"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
Link;
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-white rounded-[12px]">
        <div
          className={`flex  items-center transition-[padding] duration-500 px-[16px] ${
            isOpen ? "pt-[16px] " : "py-[16px] "
          }`}
        >
          <div className="basis-1/3">
            <div>
              <Image
                onClick={() => setIsOpen(!isOpen)}
                src="/menu.png"
                alt="bars"
                width={25}
                height={25}
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Link href="/" className="text-[20px] font-bold ">
              OLYMPUS
            </Link>
          </div>
          <div className="basis-1/3 flex justify-end ">
            <Link href="/">
              <Image src="/User.png" alt="User" width={20} height={20}></Image>
            </Link>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
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
