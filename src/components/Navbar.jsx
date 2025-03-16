import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import "./NavBar.css";

const Navbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionMapping = {
    "الرئيسية": "home",
    "من نحن": "about",
    "عملاؤنا": "clients",
    "خدماتنا": "services",
    "اتصل بنا": "contact"
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">SmartTarget</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <Link
                  to={sectionMapping[item]} 
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;