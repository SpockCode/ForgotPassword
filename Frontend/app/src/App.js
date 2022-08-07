import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ForgotPassword from "./pages/fogotPassword/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
