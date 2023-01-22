import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/AuthReducer/action";
import "../signin/Signin.css";

const initForm = {
  name: "",
  email: "",
  password: "",
  phone_number: "",
  role: "user",
};

const Signup = () => {
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
    dispatch(signup(user));
  };

  return (
    <div className="container">

      {/* TOP */}

      <div className="top">
        <img src="https://img1.junaroad.com/assets/images/mobileNotif/1526210608201.jpg" alt="" />
        <div>
          <img src="https://img1.junaroad.com/assets/images/mobileNotif/1525951378657.jpg" alt="" /><span>SIGN UP</span>
          <p>sign up to proceed further</p>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="bottom">
        <form id="signup-form" onSubmit={onSubmit}>
          <input
            onChange={(e) => onChange(e)}
            placeholder="Enter Name"
            type="text"
            name="name"
            required
          />
          <input
            onChange={(e) => onChange(e)}
            placeholder="Enter Phone number"
            type="text"
            name="phone_number"
            required
          />
          <select onChange={(e) => onChange(e)} name="role">
            <option value="user">customer</option>
            <option value="vendor">vendor</option>
          </select>
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
          <input type="submit" value="SIGNUP" id="signup" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
