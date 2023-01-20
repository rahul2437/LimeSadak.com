import React from 'react'
import style from './HomeBox.module.css'

const HomeBox = ({img, title, pro, name, followers}) => {
  return (
    <div className={style.homeBox}>
      <p>{title}</p>
      <img src={img} alt="" />
      <div>
        <img src={pro} alt="" />
        <div>
          <p>By {name}</p>
          <p>{followers} Followers</p>
        </div>
      </div>

    </div>
  )
}

export default HomeBox
