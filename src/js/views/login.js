import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  console.log("Your token: ", store.token);
  const navigate = useHistory();

  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined) navigate.push("/")

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {(store.token && store.token != "" && store.token != undefined) ? (
        "you are logged whith this token" + store.token) : (
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary border-warning m-3 opacity-50" onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};