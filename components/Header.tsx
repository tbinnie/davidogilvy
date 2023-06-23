import Link from "next/link";
import React from "react";

const listItems = ["GIGS", "NEWSLETTER"];
const listItems = ["GIGS", "NEWSLETTER"];

export default function Header({ selected }: { selected?: string }) {
  return (
    <div className="flex justify-end absolute top-8 left-8">
      <ul className="flex text-sm lg:flex-col tracking-wider text-gray-400 gap-4 lg:gap-0">
        <li className={`${!selected ? "text-black" : ""} hover:text-black `}>
          <Link href="/">HOME</Link>
        </li>
        <li
          className={`${
            selected === "bio" ? "text-black" : ""
          } hover:text-black `}
        >
          <Link href="/bio">BIO</Link>
        </li>
        <a href="https://davidogilvy.uk/merch" target="_blank">
          <li className="hover:text-black">STORE</li>
        </a>
        <a href="https://www.instagram.com/davidjogilvy/" target="_blank">
          <li className="hover:text-black">INSTAGRAM</li>
        </a>
        {listItems.map((item) => (
          <li key={item} className="group relative">
            {item}
            <div className="opacity-0 group-hover:opacity-100 z-10 absolute transition duration-500 ease-in-out bg-gray-200 p-2 left-10 top-0 rounded text-sm whitespace-nowrap">
              Coming Soon
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
