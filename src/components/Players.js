import React from 'react'
import Bandcamp from './Bandcamp'
import Spotify from './Spotify'

const Players = () => {
  return (
    <section className='players bg-zinc-800 text-white p-12'>
      <h1 className='font-bold text-4xl '>New Album Out Now</h1>
      <div className='flex gap-80 text-3xl pt-8 pb-8'>
        <h1 className=''>Listen on Spotify</h1>
        <h1 className='ml-8'>Buy on Bandcamp</h1>
      </div>
        <div className='players__wrapper flex flex-col md:flex-row gap-8 justify-evenly'>
          <Spotify />         
          <Bandcamp />
        </div>
    </section>
 )
}

export default Players