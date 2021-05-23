import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import userContext from "../../context/userContext";

function Login() {
  const history = useHistory();
  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });
  const { setUserData } = useContext(userContext);

  const handleChange = event => {
    const { value, name } = event.target;
    setUserLog(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleClick = async event => {
    const { email, password } = userLog;
    event.preventDefault();
    const postRes = await Axios.post("http://localhost:5000/login", { email: email, password: password });

    setUserData({
      user: postRes.data.user,
      token: postRes.data.accessToken,
    });

    setUserLog({
      email: "",
      password: "",
    });

    localStorage.setItem("auth-token", postRes.data.accessToken);
    history.push("/");
  };

  return (
    <div>
      <form>
        <input placeholder="Email" name="email" onChange={handleChange} value={userLog.email}></input>
        <input placeholder="Password" name="password" onChange={handleChange} value={userLog.password}></input>
        <button name="loginButton" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
