import React from 'react'
import '../Media/Media.css'

function Media(props) {
  return (
    <a className='media_link' href={props.link}>
      <img className='media_img' alt='' src={props.src} />
    </a>
  )
}

export default Media