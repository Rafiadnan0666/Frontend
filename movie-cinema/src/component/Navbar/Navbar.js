import "./Navbar.css";
import { NavLink } from "react-router-dom";

// nama komponen harus di awali dengan huruf kapital
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
         <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
        <NavLink to={"/popular"}>Popular</NavLink>
        </li>
        <li>
        <NavLink to={"/top"}>Top Rated</NavLink>
        </li>
         <li>
        <NavLink to={"/Detail/:id"}>Detail</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
