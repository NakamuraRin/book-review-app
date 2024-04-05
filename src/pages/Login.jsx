import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Header } from "../components/Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

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


  return (
    <div>
      <Header />
      <h2>ログイン画面</h2>
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
        />
        <br />
        <Link to="/signup" className="signup-button">新規登録はこちら</Link>
      </main>
    </div>
  );
};