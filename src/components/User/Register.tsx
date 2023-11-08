import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./style/user.css";
import { userRegister } from "types";
import { Spinner } from "../utils/Spinner";

export const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null);
  const [form, setForm] = useState({
    login: "",
    password: "",
    email: "",
  });
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };
  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3002/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data: userRegister = await res.json();
      setResultInfo(
        `You have successfully registered with your login: ${data.login}.`
      );
    } finally {
      setLoading(false);
      setForm({ login: "", password: "", email: "" });
    }
  };
  if (loading) {
    return <Spinner />;
  }
  if (resultInfo !== null) {
    return (
      <div className="result-info">
        <p className="result-info__text">{resultInfo}</p>
        <button
          className="result-info__btn btn"
          onClick={() => setResultInfo(null)}
        >
          Add another one
        </button>
      </div>
    );
  }
  return (
    <div className="login">
      <form onSubmit={sendForm} className="user">
        <input
          className="user__input"
          type="text"
          placeholder="Login"
          value={form.login}
          onChange={(e) => updateForm("login", e.target.value)}
        />
        <input
          className="user__input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => updateForm("password", e.target.value)}
        />
        <input
          className="user__input"
          type="email"
          placeholder="email"
          value={form.email}
          onChange={(e) => updateForm("email", e.target.value)}
        />
        <button className="btn" type="submit">
          Register
        </button>
        <p className="user__text">
          You have account?
          <Link className="user__link" to="/user">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
