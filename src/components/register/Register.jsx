import React, { useState } from "react";
import Axios from "axios";

function Register() {
  const [userReg, setUserReg] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setUserReg(prevValues => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleClick = event => {
    event.preventDefault();
    const postRes = Axios.post("http://localhost:5000/register", {
      userReg,
    });
    setUserReg({
      displayName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form>
        <input placeholder="Display Name" name="displayName" onChange={handleChange} value={userReg.displayName}></input>
        <input placeholder="Email" name="email" onChange={handleChange} value={userReg.email}></input>
        <input placeholder="Password" name="password" onChange={handleChange} value={userReg.password}></input>
        <button type="submit" name="registerButton" onClick={handleClick}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
