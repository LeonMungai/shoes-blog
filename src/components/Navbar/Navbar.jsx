import React from "react";
import "./Navbar.css";
import { House } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="top left">
    <nav>
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-twitter-square"></i>
    <i class="fab fa-pinterest-square"></i>
    <i class="fab fa-youtube-square"></i>
      <ul>
        <li>
          <Link to="/">
            <House />
          </Link>
        </li>
        <li>
          <Link to="/card">ArticleCard</Link>
        </li>
        <li>
          <Link to="/about">ArticleDetail</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
