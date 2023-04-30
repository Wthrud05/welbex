import React from 'react'
import redball from '../assets/images/redball.png'
import purpleball from '../assets/images/purpleball.png'
import redballMini from '../assets/images/redball-mini.png'

const Background = () => {
  return (
    <div>
      <div className="purple-blur"></div>
      <div className="red-blur"></div>
      <img className="red-ball" src={redball} alt="redball" />
      <img className="purple-ball" src={purpleball} alt="purpleball" />
      <img className="red-ball-mini" src={redballMini} alt="redball-mini" />
    </div>
  )
}

export default Background
