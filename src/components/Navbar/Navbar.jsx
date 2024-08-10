import "./Navbar.css";
import { LucideHouse } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

const Navbar = () => (
  <nav>
    <div className="top-navbar">
      <a target="_blank" href="https://facebook.com">
        <i className="fab fa-facebook-square "></i>
      </a>
      <a target="_blank" href="https://facebook.com">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a target="_blank" href="https://facebook.com">
        <i className="fab fa-pinterest-square"></i>
      </a>
      <a target="_blank" href="https://facebook.com">
        <i className="fab fa-youtube-square"></i>
      </a>
    </div>

    <div className="navigation-menu">
      <Link to={APP_ROUTES.HOME}>
        <div className="logo">
          <LucideHouse />
        </div>
      </Link>
      <ul>
        <li>
          <NavLink to={APP_ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={APP_ROUTES.CONTACT}>Contact US</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
