import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signin } from "../../redux/AuthReducer/action";
import "./Signin.css";

const initForm = {
  email: "",
  password: "",
};

const Signin = () => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState(initForm);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(user));
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container">
      {/* TOP */}

      <div className="top">
        <img
          src="https://img1.junaroad.com/assets/images/mobileNotif/1526210608201.jpg"
          alt=""
        />
        <div>
          <img
            src="https://img1.junaroad.com/assets/images/mobileNotif/1525951378657.jpg"
            alt=""
          />
          <span>SIGN IN</span>
          <p>sign in to proceed further</p>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="bottom">
        <form id="signin-form" onSubmit={onSubmit}>
          <input
            onChange={(e) => onChange(e)}
            placeholder="Enter Email"
            type="text"
            name="email"
            required
          />
          <input
            onChange={(e) => onChange(e)}
            placeholder="Enter Password"
            type="password"
            name="password"
            required
          />
          <input type="submit" value="SIGNIN" id="signin" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
