import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Header } from "../components/Header";
import { url } from "../const";


export const Home = () => {
  return (
    <div>
      <Header />
      <main className="Home">
        <h2>ホーム画面</h2>
      </main>
    </div>
  );
};