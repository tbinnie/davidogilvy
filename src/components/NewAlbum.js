import React from "react";
import spotifyIcon from "../imgs/icons/spotify-icon.svg";
import bandcampIcon from "../imgs/icons/bandcamp-icon.svg";

const NewAlbum = () => {
  return (
    <section className="mainsite w-[75%] ml-0 mr-auto bg-[url('./imgs/background-trim.png')] h-screen bg-cover bg-center p-12">
      <div className="new_album_wrapper flex justify-between">
        <h1 className="text-5xl font-medium w-40 ">
          A SCOTTISH AMERICAN SONGBOOK DAVID OGILVY
        </h1>
        <div className="flex flex-col gap-8 items-end justify-center">
          <h2 className="text-4xl font-bold">
            Listen on Spotify{" "}
            <img src={spotifyIcon} className="h-16 w-auto inline" />
          </h2>
          <h2 className="text-4xl font-bold">
            Buy on Bandcamp{" "}
            <img src={bandcampIcon} className="h-16 w-auto inline" />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default NewAlbum;
