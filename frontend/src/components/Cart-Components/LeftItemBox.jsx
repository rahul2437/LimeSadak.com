import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import ConvenienceBox from "./ConvenienceBox";
import LeftContentBox from "./LeftContentBox";
// import { Link } from "react-router-dom";

const LeftItemBox = () => {
  const store = useSelector((store) => store.CartReducer);
  const {
    address: { address, city, locality, pinCode, state, town },
    cart,
    wishlist,
  } = store;
  // console.log(wishlist);
  return (
    <LeftContentBox>
      {/* <AddressBox pinCode={pinCode} />
      <OfferBox /> */}
      <ConvenienceBox />
      <TotalItems>
        <b>Total Items: {cart.length}</b>
      </TotalItems>
      {/* <CartItem /> */}
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <CartItem
              key={item.product_base_href}
              id={item.product_base_href}
              size={["M", "L", "XL", "XXL"]}
              {...item}
            />
          );
        })}
      {/* <Link to={"/wishlist"}>
        <AddFromWishList>
          <HiOutlineClipboardList />
          <b>Add more from Wishlist</b>
        </AddFromWishList>
      </Link> */}
    </LeftContentBox>
  );
};

const TotalItems = styled.div`
  padding: 16px;
`;

const AddFromWishList = styled.div`
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
`;
export default LeftItemBox;
