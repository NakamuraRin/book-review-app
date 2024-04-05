import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { logIn } from "../authSlice";
import { url } from "../const";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isSignIn);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [, setCookie] = useCookies();

  const handleEmailChange = (e) => {
    const email = e.target.value.trim();
    setEmail(email);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setErrorMessageEmail("有効なメールアドレスを入力してください。");
    } else {
      setErrorMessageEmail("");
    }
  };

  const handleEmailBlur = (e) => {
    if (email === "") {
      setErrorMessageEmail("メールアドレスを入力してください");
    } else {
      setErrorMessageEmail("");
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value.trim();
    setPassword(password);

    if (password.length < 6) {
      setErrorMessagePassword("パスワードは6文字以上で設定してください");
    } else {
      setErrorMessagePassword("");
    }
  };

  const handlePasswordBlur = (e) => {
    if (password === "") {
      setErrorMessagePassword("パスワードを入力してください");
    } else {
      setErrorMessagePassword("");
    }
  };

  const onLogin = () => {
    axios
      .post(`${url}/signin`, { email: email, password: password })
      .then((res) => {
        setCookie("token", res.data.token);
        dispatch(logIn());
        navigate("/");
      })
      .catch((err) => {
        setErrorMessageLogin(`ログインに失敗しました。${err}`);
      });
  };

  if (auth) return <Navigate to="/" />;

  return (
    <div>
      <Header />
      <h2>ログイン画面</h2>
      <p className="errormessage-login">{errorMessageLogin}</p>
      <main className="login-form">
        <label htmlFor="email">メールアドレス</label>
        <br />
        <input
          id="email"
          type="email"
          className="email-input"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <p className="errormessage-email">{errorMessageEmail}</p>
        <label htmlFor="password">パスワード</label>
        <br />
        <input
          id="password"
          type="password"
          className="password-input"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        <p className="errormessage-password">{errorMessagePassword}</p>
        <input
          type="submit"
          className="login-submit"
          value="ログイン"
          onClick={onLogin}
        />
        <br />
        <Link to="/signup" className="signup-button">新規登録はこちら</Link>
      </main>
    </div>
  );
};