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
    <section className="bg-dobeige px-8 py-16 lg:p-24 flex justify-center items-center min-h-screen">
      <div className="bio__wrapper flex flex-col 2xl:flex-row lg:gap-40 justify-center items-center  relative">
        <div className="flex flex-col justify-center gap-16 items-center 2xl:items-start py-12">
          <p className="absolute bottom-0 left-0 font-serif text-xs">
            COPYRIGHT 2022, DAVID OGILVY.
          </p>
          <h1 className="text-3xl tracking-[1.5rem] text-center 2xl:whitespace-nowrap">
            <Link to="/">DAVID OGILVY</Link>
          </h1>
          <p className="font-serif text-justify text-sm lg:w-[30rem]">
            David Ogilvy, the Scottish American singer songwriter and composer,
            was born in London in 1958, and grew up between London and Scotland,
            spending significant periods of time in the USA.<br></br> After
            leaving University, he went on to start, and DJ the ‘Soul Furnace’,
            one of the most fashionable nights in the club scene in Soho in the
            early ‘80’s The music focused on rare ‘50’s R’n B and early soul.{" "}
            <br></br>He then started concentrating on songwriting, and working
            as a session player, playing mandolin, pedal steel, dobro, guitar
            and piano. During this time he signed a publishing deal with Warner
            Chappell, and set up his own studio, Western Studios, in Westbourne
            Park.<br></br> He worked with various artists, including Eg and
            Alice, Curiosity Killed the Cat, Roberto Pla, Peter Andre, and Nick
            Kamen. He worked with Cilla Black on her last studio recording. He
            has performed with Lucinda Williams, Buddy Miller, Rufus Wainwright,
            Eliza and Martin Carthy amongst many others.<br></br> His first solo
            album ‘Like It Is’ (2003) was received to rave reviews; mixing the
            Scottish folk tradition, Americana, and jazz influences into a
            seamless poetic vision. His second and third albums; Mockingbird
            (2005) and Heaven and Earth (2008) carried on and developed these
            strains. <br></br>He produced and co wrote his long time
            collaborator Christina Kulukundis’ self titled album (2005).{" "}
            <br></br>He has also scored the music for:<br></br> The controversial
            American documentary The Toughest Sheriff in America.<br></br> Two
            documentaries by Hannah Rothschild (High Society: The Wonderful
            World of Nicky Haslam, Peter Mandelson: The Real PM?) shown as part
            of the BBC’s Storyville series.<br></br> He also wrote the score for the
            art-house film of Edward St Aubyn’s Booker-nominated novel Mother’s
            Milk.<br></br> David’s songs are featured in the Hollywood film, The Flock,
            starring Richard Gere, Gaby Dellal’s film Angel’s Crest.<br></br> In
            2013 he started The Live Salon, as a showcase for purely acoustic
            music, and spoken word, drawing on the 19th century tradition of the
            musical salon. Writers and poets such as John Stammers, Alan Jenkins
            and Cressida Connolly, regularly join the eclectic group of
            musicians.<br></br>
            He has recently completed a new album of 14 songs entitled ‘A
            Scottish American Songbook’ released this September.
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
        <img
          src={coverImg}
          className="w-[55rem] h-auto shadow-[10px 0 5px -2px #888;]"
        />
      </div>
    </section>
  );
};

export default Bio;
