import React, { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Compose from "./components/compose/Compose";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Posts from "./components/posts/Posts";
import userContext from "./context/userContext";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  useEffect(() => {
    const checkLogIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        token = "";
        localStorage.setItem("auth-token", token);
      }

      const postRes = await Axios.post("http://localhost:5000/token", { token: token });

      setUserData({
        user: postRes.data.user,
        token: postRes.data.token,
      });
    };

    checkLogIn();
  }, [userData.token]);

  return (
    <BrowserRouter>
      <userContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/compose" exact component={Compose} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
