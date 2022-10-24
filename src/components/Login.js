import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });

  const [userInfo, setUserInfo] = useState({
    userName: "",
    pass: "",
  });

  const handleUserName = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
  };

  const handlePassword = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, pass: e.target.value };
    });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      data.userName === userInfo.userName &&
      data.password === userInfo.pass
    ) {
      navigate("/home");
    } else {
      document.querySelector("p").style.visibility = "visible";
      setUserInfo({
        userName: "",
        pass: "",
      });
    }
  };

  return (
    <>
      <h1>Login</h1>
      <p>The username or password is incorrect!</p>
      <form onSubmit={handleLogIn}>
        <input
          onChange={handleUserName}
          value={userInfo.userName}
          type="text"
          name="userName"
          placeholder="Username"
        />

        <input
          onChange={handlePassword}
          value={userInfo.pass}
          type="password"
          name="password"
          placeholder="Password"
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
