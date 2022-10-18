import React from "react";
import spotifyIcon from "../imgs/icons/spotify-icon.svg";
import bandcampIcon from "../imgs/icons/bandcamp-icon.svg";

const NewAlbum = () => {
  return (
    <section className="mainsite lg:w-[75%] ml-0 mr-auto bg-[url('./imgs/background-1800.png')] h-screen bg-cover p-6 relative">
        <div className="flex flex-col gap-8 items-end justify-center absolute bottom-20 right-4 lg:bottom-8 lg:right-8">
          <a href="https://open.spotify.com/album/7Lm1DIcgfT01ZJRqirXFTR?si=_1cRHihEQiCiv445nSY7JA" className="hover:scale-110">
            <h2 className="text-xl lg:text-3xl font-medium">
              Listen on Spotify{" "}
              <img src={spotifyIcon} className=" h-8 lg:h-12 w-auto inline" />
            </h2>
          </a>
          <h2 className="text-xl lg:text-3xl font-medium">
            Buy on Bandcamp{" "}
            <img src={bandcampIcon} className="h-8 lg:h-12 w-auto inline" />
          </h2>
        </div>
    </section>
  );
};

export default NewAlbum;
