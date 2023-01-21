import React from 'react'
import style from './ProdBox.module.css'

const ProdBox = ({img, price, discPrice, author}) => {
const percent= Math.round(((price-discPrice)/price)*100)

  return (
    <div className={style.prodBox}>
        <img src={img} alt="" />
        <div className={style.details}>
            <div>
                <p>₹{discPrice} <span style={{textDecoration:"line-through"}}>₹{price}</span><span style={{paddingLeft:"10px", color:"green"}}>{percent}%</span></p>
                <p>{author}</p>
            </div>
            <div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='18' width='18'%3E%3Cpath fill='%2399CC33' d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'%3E%3C/path%3E%3C/svg%3E" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProdBox
