import React from "react";
import spotifyIcon from "../imgs/icons/spotify-icon.svg";
import bandcampIcon from "../imgs/icons/bandcamp-icon.svg";
import instaIcon from "../imgs/icons/instagram-icon.svg";
import facebookIcon from "../imgs/icons/facebook-icon.svg";


const Head = () => {
  return (
    <section className="p-12 bg-dobeige border-l-black border-l-2 fixed h-full w-[25%] right-0 top-0">
      <div className="head__wrapper  flex flex-col gap-8 justify-between">
        <h1 className="text-6xl font-semibold">David Ogilvy</h1>
        <p className="font-medium text-base">
          {" "}
          -- (BIO) -- To date David Ogilvy has produced Like It Is, Mockingbird
          and Heaven and Earth, three critically acclaimed albums which trace a
          progression through folk influences toward the darker and more urban
          world found in the songs of the latter.
        </p>
        <div className="pages">
          <h2>Store</h2>
          <h2>Gigs</h2>
        </div>
        <div className="socials flex flex-col gap-4">
          <h3><img src={instaIcon} className="inline h-6 w-auto"/> Instagram</h3>
          <h3><img src={facebookIcon} className="inline h-6 w-auto"/> Facebook</h3>
          <h3><img src={spotifyIcon} className="inline h-6 w-auto"/> Spotify</h3>
          <h3><img src={bandcampIcon} className="inline h-6 w-auto  "/> Bandcamp</h3>
        </div>
      </div>
    </section>
  );
};

export default Head;
