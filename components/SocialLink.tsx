import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({link, text}: {link: string, text: string}) => {
  return (
    <a href={link} target="_blank" className="hover:scale-105">
      <h3>{text}</h3>
    </a>
  );
};


export default SocialLink;
