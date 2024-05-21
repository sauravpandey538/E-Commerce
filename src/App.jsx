import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "../Main_Page/Navigation";
import BelowNav from "../Main_Page/BelowNav";
import Catagories from "../Main_Page/Catagories";
import Contact from "../Main_Page/Contact";
import Footer from "../Main_Page/Footer";
import SingleProduct from "../Helper/SingleProduct";
import ApiCallByCatagory from "../Api/ApiCallByCatagory";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BelowNav />
              <Catagories />
              <Contact />
            </>
          }
        />
        <Route path="/category/:category" element={<ApiCallByCatagory />} />
        <Route path="/category/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
