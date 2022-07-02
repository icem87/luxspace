import React from "react";
import "../App.css";

import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import JustArrived from "../parts/HomePage/JustArrived";
import BrowseTheRoom from "../parts/HomePage/BrowseTheRoom";
import Clients from "../parts/HomePage/Clients";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

const HomePage = () => {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme={"white"} position={"absolute"} />
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
