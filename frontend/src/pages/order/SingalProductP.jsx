import React from "react";
import styles from "./SingalProductP.module.css";
import { BsFillStarFill, BsFillBagFill, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
// import { getLocalData } from "../Utils/helperFuns";
import { addToCart, addToWishList } from "../../redux/CartReducer/action";
import { useDispatch } from "react-redux";
// import Footer from "../Components/Footer/Footer";
// import Navbar from "../Components/Navbar";

function SingleProductP() {
  // temp Comment
  
  // let p = getLocalData("singlePageData");
  const p ={"product_ratingsContainer":4.2,"product_ratingsCount":5,"product-separator":"|","product_base_href":"https://www.myntra.com/tshirts/the-souled-store/the-souled-store-men-navy-blue-psg-messi-back-print-oversized-t-shirt/20059494/buy","img_responsive_src":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20059494/2022/9/17/c89121dc-e7e5-4c87-a0c5-6a5eab2c37751663433848919TheSouledStoreMenNavyBlueParisSaint-GermainLionelMessiDrop-S1.jpg","product_brand":"The Souled Store","product_product":"Men Varsity Printed Loose T-shirt","product_sizeInventoryPresent":"XXS,","product_sizeInventoryPresent_2":"XS,","product_sizeInventoryPresent_3":"S,","product_sizeInventoryPresent_4":"M,","product_sizeInventoryPresent_5":"L,","product_sizeInventoryPresent_6":"XL,","product_sizeInventoryPresent_7":"XXL,","product_sizeInventoryPresent_8":"3XL","product_discountedPrice":"Rs. 1049","product_strike":"Rs. 1299","product_discountPercentage":"(Rs. 250 OFF)","product_sizeButton":"XS","product_sizeButton_2":"S","product_sizeButton_3":"M","product_sizeButton_4":"L","product_sizeButton_5":"XL","product_sizeButton_6":"XXL"}
  const dispatch = useDispatch();

  let productSize = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const handleAddCart = () => {
    // console.log(p);

    dispatch(addToCart(p));
    alert("Added to bag Successfully 😊");
  };

  const handleAddWishlist = () => {
    dispatch(addToWishList(p));

    alert("Added to wishlist Successfully 😊");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.SingleProductP}>
        <div className={styles.spLocation}>
          <span>Home / </span>
          <span> Clothing / </span>
          <span> Men Clothing /</span>
          <span> Tshirts / </span>
          <span>Roadster Tshirts </span>
          <span> {">"} </span>
          <span>More By Roadster</span>
        </div>

        <div className={styles.sppDiv}>
          <div className={styles.sppImgDiv}>
            <img src={p.img_responsive_src} style={{ width: "100%" }} alt="" />
          </div>
          <div className={styles.sppDetails}>
            <h1 className={styles.sppDetailsHead}>{p.product_brand}</h1>
            <h1 className={styles.sppDetailsTitle}>{p.product_product}</h1>

            <div className={styles.sppDetailsRatings}>
              <span>{p.product_ratingsContainer}</span>
              <span>
                {" "}
                <BsFillStarFill style={{ color: "teal" }} />{" "}
              </span>
              <span>|</span>
              <span>{p.product_ratingsCount} Ratings</span>
            </div>
            <hr className={styles.sppDetailsSeprator1} />

            <div className={styles.sppDetailsPrices}>
              <strong style={{ fontSize: "20px" }}>
                ₹{p.product_discountedPrice}
              </strong>
              <span className={styles.sppDetailsStrick}>
                {" "}
                MRP {`₹${p.product_strike}`}
              </span>
              <span className={styles.sppDiscountPercentage}>
                {p.product_discountPercentage}
              </span>
            </div>

            <span className={styles.sppDetailsTax}>
              {" "}
              inclusive of all taxes{" "}
            </span>

            <div className={styles.sppSize}>
              {" "}
              <span>SELECT SIZE</span>
              <span>
                SIZE CHART{" "}
                <AiOutlineRight
                  style={{ fontSize: "13px", display: "inline" }}
                />{" "}
              </span>{" "}
            </div>

            <div className={styles.sppSizeList}>
              {productSize.map((size, id) => (
                <button key={id}> {size}</button>
              ))}
            </div>

            <button className={styles.sppAddToBag} onClick={handleAddCart}>
              {" "}
              <BsFillBagFill
                style={{ marginRight: "10px", display: "inline" }}
              />{" "}
              ADD TO BAG
            </button>
            <button className={styles.sppWishlist} onClick={handleAddWishlist}>
              {" "}
              <BsFillHeartFill style={{ marginRight: "10px" }} /> WISHLIST
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SingleProductP;


// {"product_ratingsContainer":4.2,"product_ratingsCount":5,"product-separator":"|","product_base_href":"https://www.myntra.com/tshirts/the-souled-store/the-souled-store-men-navy-blue-psg-messi-back-print-oversized-t-shirt/20059494/buy","img_responsive_src":"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20059494/2022/9/17/c89121dc-e7e5-4c87-a0c5-6a5eab2c37751663433848919TheSouledStoreMenNavyBlueParisSaint-GermainLionelMessiDrop-S1.jpg","product_brand":"The Souled Store","product_product":"Men Varsity Printed Loose T-shirt","product_sizeInventoryPresent":"XXS,","product_sizeInventoryPresent_2":"XS,","product_sizeInventoryPresent_3":"S,","product_sizeInventoryPresent_4":"M,","product_sizeInventoryPresent_5":"L,","product_sizeInventoryPresent_6":"XL,","product_sizeInventoryPresent_7":"XXL,","product_sizeInventoryPresent_8":"3XL","product_discountedPrice":"Rs. 1049","product_strike":"Rs. 1299","product_discountPercentage":"(Rs. 250 OFF)","product_sizeButton":"XS","product_sizeButton_2":"S","product_sizeButton_3":"M","product_sizeButton_4":"L","product_sizeButton_5":"XL","product_sizeButton_6":"XXL"}