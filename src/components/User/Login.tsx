import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./style/user.css";

export const Login = () => {
  const sendForm = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form onSubmit={sendForm} className="user">
        <input className="user__input" type="text" placeholder="Login" />
        <input className="user__input" type="password" placeholder="Password" />
        <button className="btn" type="submit">
          Login
        </button>
        <p className="user__text">
          You don't have account?
          <Link className="user__link" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
