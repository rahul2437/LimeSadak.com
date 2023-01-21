import React from 'react'
import style from './Products.module.css'
import Navbar from '../../components/navbar/Navbar'
import ProdSidebar from '../../components/prodSidebar/ProdSidebar'
import ProdBox from '../../components/prodBox/ProdBox'

const prod=[
    {
        img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/11334737/zoom_0-1470377973.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/17718906/zoom_0-1620383566.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/18823368/zoom_0-1670820278.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    },
    {
        img:"https://img3.junaroad.com/uiproducts/19147818/zoom_0-1673332950.jpg",
        price:999,
        discPrice:399,
        author:"Sprouted"
    }
]

const Products = () => {
  return (
    <>
     <Navbar/>
      <div className={style.products}>
        <div className={style.left}>
            <ProdSidebar/>
        </div>
        <div className={style.right}>
            {
                prod.map((prod)=>{
                    return <ProdBox 
                        img={prod.img}
                        price={prod.price}
                        discPrice={prod.discPrice}
                        author={prod.author}
                    />
                })
            }
            
        </div>
      </div>
    </>
    
  )
}

export default Products
