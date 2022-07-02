import React from "react";
import "../App.css";

import Header from "../parts/Header";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

const Details = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/9344", name: "Office Room" },
          { url: "/categories/9344/products/788", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemaps />
      <Footer />
    </>
  );
};

export default Details;
