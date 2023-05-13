import React from "react";
import Item from "./Item";

const Gallery = () => {
  return (
    <section className="gallery p-12">
      <h1 className='text-6xl font-bold text-center rounded-xl mb-8 p-2'>
        Music & Merchandise
      </h1>
      <div className="gallery_wrapper grid grid-cols-3 justify-items-center p-12 rounded-xl">
        <Item
          source="https://bandcamp.com/EmbeddedPlayer/track=2772112785/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          link="https://davidogilvy.uk/track/the-road-and-the-miles-to-dundee"
          desc="The Road and the Miles to Dundee by David Ogilvy"
        />
        <Item
          source="https://bandcamp.com/EmbeddedPlayer/track=4121781200/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          link="https://davidogilvy.uk/track/wild-mountain-thyme"
          desc="Wild Mountain Thyme by David Ogilvy"
        />
        <Item
          source="https://bandcamp.com/EmbeddedPlayer/track=3640226730/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
          link="https://davidogilvy.uk/track/the-water-is-wide"
          desc="The Water is Wide by David Ogilvy"
        />
      </div>
    </section>
  );
};

export default Gallery;
