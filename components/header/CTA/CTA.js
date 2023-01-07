import React from 'react'
import './CTA.css'

function CTA(props) {
  return (
    <button className={props.CtaClassName}>
      {props.title}
    </button>
  )
}

export default CTA