import React from 'react'

const Item = (props) => {
  return (
    <iframe className="bg-zinc-900 border-zinc-900 border-[12px] rounded-lg" style={{"width": "350px", "height": "442px"}} src={props.source} seamless><a href={props.link}>{props.desc}</a></iframe>
  )
}

export default Item

