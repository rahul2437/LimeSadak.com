import React from "react";
import styled from "styled-components";
import CartNav from "../../components/Cart-Components/CartNav";
import LeftItemBox from "../../components/Cart-Components/LeftItemBox";
import RightItemBox from "../../components/Cart-Components/RightItemBox";
// import Footer from "../Components/Footer/Footer";

const Cart = () => {
  // const user = useSelector((store) => console.log(store)); //For testing
  return (
    <CartContainer>
      <CartNav />
      <LeftItemBox />
      <RightItemBox />
      <hr />
      {/* <Footer /> */}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  font-size: 13px;
  & svg {
    display: inline;
  }
`;

export default Cart;
