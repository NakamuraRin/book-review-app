import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Compressor from "compressorjs";
import "./signup.css"
import { Header } from "../components/Header";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageUserName, setErrorMessageUserName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const figure = document.querySelector("#usericon-figure");
    const figureImage = document.querySelector("#usericon-preview");

    console.log("original size", file.size);

    if (file) {
      new Compressor(file, {
        quality: 0.5,
        maxHeight: 400,
        maxWidth: 400,
        success(result) {
          figureImage.setAttribute("src", URL.createObjectURL(file));
          figure.style.display = "block";
          console.log(result);
        },
        error(err) {
          figure.style.display = "none";
          console.log(err.message);
        },
      });
    }
  };

  return (
    <div>
      <Header />
      <h2>ユーザー新規作成</h2>
      <main className="signup-form">
        <label htmlFor="username">ユーザー名</label>
        <br />
        <input
          id="username"
          type="text"
          className="username-input"
        />
        <br />
        <p className="errormessage-username">{errorMessageUserName}</p>
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
        <label htmlFor="iconimg">アイコン画像</label>
        <br />
        <input
          id="usericon"
          type="file"
          className="usericon-input"
          accept="image/jpg, image/jpeg, image/png"
          onChange={handleFileChange}
        />
        <figure id="usericon-figure">
          <img
            src=""
            alt="アイコン画像"
            id="usericon-preview"
          />
        </figure>
        <br />
        <input
          type="submit"
          className="signup-submit"
          value="新規作成"
        />
        <br />
        <Link to="/login" className="login-button">ログインはこちら</Link>
      </main>
    </div>
  );
};