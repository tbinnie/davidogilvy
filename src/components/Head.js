import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="head__wrapper  flex justify-end absolute top-8 left-8">
      <ul className="flex text-sm flex-col tracking-wider text-gray-400">
        <li className="hover:text-black">
          <Link to="/bio">BIO</Link>
        </li>
        <li className="hover:text-black">STORE</li>
        <li className="hover:text-black">GIGS</li>
        <li className="hover:text-black">NEWSLETTER</li>
        <li className="hover:text-black">SOCIAL</li>
      </ul>
    </div>
  );
};

export default Head;
