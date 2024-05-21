import React, { createContext, useCallback, useState } from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "../Main_Page/Navigation";
import BelowNav from "../Main_Page/BelowNav";
import Catagories from "../Main_Page/Catagories";
import Contact from "../Main_Page/Contact";
import Footer from "../Main_Page/Footer";
import SingleProduct from "../Helper/SingleProduct";
import ApiCallByCatagory from "../Api/ApiCallByCatagory";

export const AppContext = createContext({
  products: [],
  addProduct() {},
});

function AppStore({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback(
    (newProduct) => {
      setProducts((p) => [...p, newProduct]);
    },
    [setProducts]
  );
  console.log(products);
  return (
    <AppContext.Provider value={{ products, addProduct }}>
      {children}
    </AppContext.Provider>
  );
}

function App() {
  return (
    <AppStore>
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
    </AppStore>
  );
}

export default App;
