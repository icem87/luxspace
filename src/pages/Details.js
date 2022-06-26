import React from "react";
import "../App.css";

import Header from "../parts/Header";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sitemaps />
      <Footer />
    </>
  );
};

export default HomePage;
