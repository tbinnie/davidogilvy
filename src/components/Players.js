import React from 'react'
import Bandcamp from './Bandcamp'
import Spotify from './Spotify'

const Players = () => {
  return (
    <section className='players'>
        <div className='players__wrapper flex justify-evenly p-32'>
            <Spotify />
            <Bandcamp />
            <div className='w-[30%]'>Third one</div>
        </div>
    </section>
 )
}

export default Players