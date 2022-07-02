import React from "react";
import PageErrorMessage from "../parts/PageErrorMessage";
import Header from "../parts/Header";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";

function NotFound() {
  return (
    <>
      <Header />
      <PageErrorMessage />
      <Sitemaps />
      <Footer />
    </>
  );
}

export default NotFound;
