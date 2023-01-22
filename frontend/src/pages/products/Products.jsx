import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import ProdBox from "../../components/prodBox/ProdBox";
import ProdSidebar from "../../components/prodSidebar/ProdSidebar";
import { getProductsSuccess } from "../../redux/ProductsReducer/actionCreator";
import style from "./Products.module.css";
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

const Products = () => {
  const { token } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.ProductsReducer);
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const { gender } = searchParams.get("gender");
  console.log(gender);
  useEffect(() => {
    try {
      let res = fetch(
        `https://general-icicle-9828.vercel.app/products?gender=${gender}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      let data = res.json();
      dispatch(getProductsSuccess(data.data));
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <div className={style.products}>
        <div className={style.left}>
          <ProdSidebar />
        </div>
        <div className={style.right}>
          {products.map((prod, i) => {
            return (
              <Link to={`/singalproduct/${prod._id}`}>
                <ProdBox
                  key={i + 2}
                  name={prod.name}
                  price={prod.price}
                  brand={prod.brand}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
