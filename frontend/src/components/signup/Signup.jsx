import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/AuthReducer/action";
import "./Signup.css";

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
    <div style={{paddingTop:"60px"}}>
      <h1>SIGN-UP</h1>
      <form id="signup-form" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          onChange={(e) => onChange(e)}
          placeholder="Enter Name"
          type="text"
          name="name"
          required
        />
        <label>Phone Number</label>
        <input
          onChange={(e) => onChange(e)}
          placeholder="Enter Phone number"
          type="text"
          name="phone_number"
          required
        />
        <label>Role</label>
        <select onChange={(e) => onChange(e)} name="role">
          <option value="user">customer</option>
          <option value="vendor">vendor</option>
        </select>
        <label>Email</label>
        <input
          onChange={(e) => onChange(e)}
          placeholder="Enter Email"
          type="text"
          name="email"
          required
        />
        <label>Password</label>
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
  );
};

export default Signup;
