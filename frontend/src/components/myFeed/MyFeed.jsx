import React from 'react'
import style from './MyFeed.module.css'

const MyFeed = ({img, title}) => {
  return (
    <div className={style.myFeed}>
      <img src={img} alt={img}/>
      <p>{title}</p>
    </div>
  )
}

export default MyFeed
