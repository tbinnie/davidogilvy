import React from "react";

import SocialLink from "./SocialLink";


import spotifyIcon from "../imgs/icons/spotify-icon.svg";
import bandcampIcon from "../imgs/icons/bandcamp-icon.svg";
import instaIcon from "../imgs/icons/instagram-icon.svg";
import facebookIcon from "../imgs/icons/facebook-icon.svg";
import rightArrow from "../imgs/icons/right-arrow-icon.svg";
const Head = () => {
  return (
    <section className="hidden lg:block p-12 bg-dobeige fixed h-full lg:w-[25%] right-0 top-0 shadow-[-5px_0_10px_1px_rgba(0,0,0,0.3)] z-10">
      <div className="head__wrapper  flex flex-col gap-8 justify-between h-full">
        <h1 className="text-6xl font-semibold">David Ogilvy</h1>
        <p className="font-medium text-base">
          {" "}
          To date David Ogilvy has produced Like It Is, Mockingbird and Heaven
          and Earth, three critically acclaimed albums which trace a progression
          through folk influences toward the darker and more urban world found
          in the songs of the latter.
        </p>
        <div className="pages flex flex-col gap-4">
          <h2 className="text-3xl hover:scale-110">
            Store <img src={rightArrow} className="h-4 w-auto inline" />
          </h2>
          <h2 className="text-3xl hover:scale-110">
            Upcoming Gigs <img src={rightArrow} className="h-4 w-auto inline" />
          </h2>
        </div>

        {/* Social media links */}
        <div className="socials flex flex-col gap-4">
          <SocialLink link="https://www.instagram.com/davidjogilvy/" img={instaIcon} text="Instagram" />
          <SocialLink link="https://www.facebook.com/davidogilvymusician" img={facebookIcon} text="Facebook" />
          <SocialLink link="https://open.spotify.com/artist/2C8TjSIjGzbS1viY8sFJqQ?si=KF1UEuLKQCCtM757KPSf0Q" img={spotifyIcon} text="Spotify" />
          <SocialLink link="https://davidogilvy.uk/" img={bandcampIcon} text="Bandcamp" />
        </div>
        <h3 className="text-center">© Copyright 2022, David Ogilvy.</h3>
      </div>
    </section>
  );
};

export default Head;
