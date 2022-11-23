import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="head__wrapper  flex justify-end absolute top-8 left-8">
      <ul className="flex text-sm lg:flex-col tracking-wider text-gray-400 gap-4 lg:gap-0">
        <li className={`${window.location.pathname === '/bio' ? 'text-black' : ''} hover:text-black `}>
          <Link to="/bio">BIO</Link>
        </li>
        <a href="https://davidogilvy.uk/" target="_blank">
          <li className="hover:text-black">STORE</li>
        </a>
        <li className="">GIGS</li>
        <li className="">NEWSLETTER</li>
        <li className="">SOCIAL</li>
      </ul>
    </div>
  );
};

export default Head;
