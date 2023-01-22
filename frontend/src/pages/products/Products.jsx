import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import ProdBox from "../../components/prodBox/ProdBox";
import ProdSidebar from "../../components/prodSidebar/ProdSidebar";
import { getProducts } from "../../redux/ProductsReducer/actionCreator";
import style from "./Products.module.css";

const Products = () => {
  const { token } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.ProductsReducer);
  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <div className={style.products}>
        <div className={style.left}>
          <ProdSidebar />
        </div>
        <div className={style.right}>
          {products?.map((prod, i) => {
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
