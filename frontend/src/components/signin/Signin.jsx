import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/AuthReducer/action";
import "./Signin.css";

const initForm = {
  email: "",
  password: "",
};

const Signin = () => {
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

  return (
    <div>
      <h1>SIGN-IN</h1>
      <form id="signin-form" onSubmit={onSubmit}>
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
        <input type="submit" value="SIGNIN" id="signin" />
      </form>
    </div>
  );
};

export default Signin;
