import React from 'react'
import '../styles/cardBig.css'

const cardBig = (props) => {
    const image1=`${props.image}`
  return (
    <div className="cardBig">
        
        <img src={image1} alt="" />
        <h2>{props.heading}</h2>
        <p>{props.msg}</p>
        <h4>Read More &#8594; </h4>
    </div>
  )
}

export default cardBig