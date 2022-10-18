import React from 'react'

import SocialLink from './SocialLink'

import spotifyIcon from '../imgs/icons/spotify-icon.svg'
import bandcampIcon from '../imgs/icons/bandcamp-icon.svg'
import instaIcon from '../imgs/icons/instagram-icon.svg'
import facebookIcon from '../imgs/icons/facebook-icon.svg'
import rightArrow from '../imgs/icons/right-arrow-icon.svg'
import Bio from './Bio'
const Head = () => {
  return (
    <div className="head__wrapper  flex gap-8 justify-end hidden lg:block absolute top-12 right-12">
      <ul className='flex text-3xl font-semibold gap-16'>
        <li>Bio</li>
        <li>Shop</li>
        <li>Gigs</li>
        <li>Social</li>
      </ul>
    </div>
  )
}

export default Head
