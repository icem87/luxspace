import React from "react";
import "../App.css";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import BrowseTheRoom from "../parts/HomePage/BrowseTheRoom";
import Clients from "../parts/HomePage/Clients";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Sitemaps />
      <Footer />
    </>
  );
};

export default HomePage;
