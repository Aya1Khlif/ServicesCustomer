import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import "./NavBar.css";

const Navbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // خريطة لربط الأسماء العربية بالـ id الإنجليزية
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

        {/* زر القائمة الجانبية */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <Link
                  to={sectionMapping[item]} // استخدام الـ id المطابق من الخريطة
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

// ✅ إضافة PropTypes للتحقق من صحة `props`
Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;