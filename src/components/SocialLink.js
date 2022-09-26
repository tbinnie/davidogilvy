import React from "react";
import PropTypes from "prop-types";


const SocialLink = (props) => {
  return (
    <a href={props.link} target="_blank" className="hover:scale-105">
      <h3>
        <img src={props.img} className="inline h-6 w-auto" /> {props.text}
      </h3>
    </a>
  );
};

SocialLink.propTypes = {
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

export default SocialLink;
