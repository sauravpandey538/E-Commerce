import React from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "../Main_Page/Navigation";
import BelowNav from "../Main_Page/BelowNav";
import Catagories from "../Main_Page/Catagories";
import Contact from "../Main_Page/Contact";
import Footer from "../Main_Page/Footer";
import WomenMainPage from "../Women/WomenMainPage";
import MenMainPage from "../Men/MenMainPage";
import JewelleryMainPage from "../Jewllery/JewelleryMainPage";
import SingleProduct from "../Helper/SingleProduct";
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
        <Route path="/women" element={<WomenMainPage />} />
        <Route path="/men" element={<MenMainPage />} />
        <Route path="/jewellery" element={<JewelleryMainPage />} />
        <Route path="/catagory/product" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
