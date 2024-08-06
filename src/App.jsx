import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import About from "../src/pages/About/About";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<ArticleDetail />} />
      <Route path="card" element={<ArticleCard />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
    </Routes>
  </Router>
);

export default App;
