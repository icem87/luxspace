import React from "react";

import Header from "../parts/Header";
import Sitemaps from "../parts/HomePage/Sitemaps";
import Footer from "../parts/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

const Cart = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemaps />
      <Footer />
    </>
  );
};

export default Cart;
