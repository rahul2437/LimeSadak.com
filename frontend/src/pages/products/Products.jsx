import React from 'react'
import style from './Products.module.css'
import Navbar from '../../components/navbar/Navbar'
import ProdSidebar from '../../components/prodSidebar/ProdSidebar'
import ProdBox from '../../components/prodBox/ProdBox'
import {useSelector, useDispatch} from 'react-redux';
import { getProductsSuccess } from '../../redux/ProductsReducer/actionCreator'



// const prod=[
//     {
//         img:"https://img3.junaroad.com/uiproducts/18823471/zoom_0-1674018312.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18294842/zoom_0-1647088459.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/17611516/zoom_0-1616215900.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18532551/zoom_0-1663862702.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18537395/zoom_0-1664045976.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/11334737/zoom_0-1470377973.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/17718906/zoom_0-1620383566.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/18823368/zoom_0-1670820278.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     },
//     {
//         img:"https://img3.junaroad.com/uiproducts/19147818/zoom_0-1673332950.jpg",
//         price:999,
//         discPrice:399,
//         author:"Sprouted"
//     }
// ]

const Products = async() => {
    const { token } = useSelector((store) => store.AuthReducer);
    const dispatch= useDispatch();
    const {products} = useSelector((store) => store.ProductsReducer);
    
    try {
        let res = await fetch(
          `https://general-icicle-9828.vercel.app/products`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        let data = await res.json();
        dispatch(getProductsSuccess(data.data))
      } catch (error) {
        console.log({ error });
      }

  return (
    <>
     <Navbar/>
      <div className={style.products}>
        <div className={style.left}>
            <ProdSidebar/>
        </div>
        <div className={style.right}>
            {
                products.map((prod)=>{
                    return <ProdBox 
                        key={prod._id}
                        // img={prod.img}
                        price={prod.price}
                        // discPrice={prod.discPrice}
                        // author={prod.author}
                    />
                })
            }
            
        </div>
      </div>
    </>
    
  )
}

export default Products
