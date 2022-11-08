import React from "react";
import SocialLink from "./SocialLink";

import spotifyIcon from "../imgs/icons/spotify-icon.svg";
import bandcampIcon from "../imgs/icons/bandcamp-icon.svg";
import instaIcon from "../imgs/icons/instagram-icon.svg";
import facebookIcon from "../imgs/icons/facebook-icon.svg";
import coverImg from "../imgs/sas-cover.png";
import { Link } from "react-router-dom";


const Bio = () => {
  return (
    <section className="bg-dobeige p-24 flex justify-center items-center min-h-screen">
      <div className="bio__wrapper flex flex-col 2xl:flex-row gap-40 justify-center items-center  relative">
        <div className="flex flex-col justify-center gap-16 items-center 2xl:items-start">
          <p className="absolute bottom-0 left-0 font-serif text-xs">COPYRIGHT 2022, DAVID OGILVY.</p>
          <h1 className="text-3xl tracking-[1.5rem] text-center 2xl:whitespace-nowrap">
            <Link to="/">DAVID OGILVY</Link>
          </h1>
          <p className="font-serif text-justify text-sm w-[30rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quo
            itaque excepturi voluptatem repellat expedita! Aliquam eligendi
            repellat perspiciatis eveniet! Iusto incidunt aliquam architecto,
            reiciendis quisquam adipisci consectetur! Nulla, fuga. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veritatis qui rem
            deleniti tempore! Consequuntur pariatur dicta facere doloremque
            totam consectetur, alias illum accusantium autem, obcaecati
            voluptatibus quae explicabo praesentium vel!
          </p>
          <div className="socials flex flex-col">
            <SocialLink
              link="https://www.instagram.com/davidjogilvy/"
              img={instaIcon}
              text="Instagram"
            />
            <SocialLink
              link="https://www.facebook.com/davidogilvymusician"
              img={facebookIcon}
              text="Facebook"
            />
            <SocialLink
              link="https://open.spotify.com/artist/2C8TjSIjGzbS1viY8sFJqQ?si=KF1UEuLKQCCtM757KPSf0Q"
              img={spotifyIcon}
              text="Spotify"
            />
            <SocialLink
              link="https://davidogilvy.uk/"
              img={bandcampIcon}
              text="Bandcamp"
            />
          </div>
        </div>
      <img src={coverImg} className="w-[55rem] h-auto shadow-[10px 0 5px -2px #888;]" />
      </div>
    </section>
  );
};

export default Bio;
