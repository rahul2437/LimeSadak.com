import axios from "axios";
import * as types from "./actionTypes";

let getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

let getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

let getProductsFailure = () => {
  return { type: types.GET_PRODUCTS_FAILURE };
};

const getProducts = () => (dispatch) => {
  dispatch(getProductsRequest());
  axios
    .get(`https://general-icicle-9828.vercel.app/products`)
    .then((res) => {
      console.log(res.data?.data);
      dispatch(getProductsSuccess(res.data?.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getProductsFailure());
    });
};

export { getProducts, getProductsSuccess };

// ?_page=2&_limit=35
