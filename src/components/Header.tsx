import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSun, BiMoon, BiGridAlt, BiCart, BiX } from "react-icons/bi";

import useDark from "@hooks/useDark";
import useScrollY from "@hooks/useScrollY";
import "@styles/Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState<Boolean>(true);
  const scrollY = useScrollY();
  useDark(darkTheme);

  return (
    <header
      className={`header ${
        location.pathname !== "/" || scrollY > 75 ? "bg-header" : ""
      }`}
    >
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Nicollette
        </Link>
        <div className={`nav__menu ${showMenu && "show-menu"}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setShowMenu(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav__close">
            <BiX onClick={() => setShowMenu(false)} />
          </div>
        </div>
        <div className="nav__actions">
          <div className="nav__toggle">
            <BiGridAlt onClick={() => setShowMenu(true)} />
          </div>
          <Link to="/" className="nav__cart">
            <BiCart />
          </Link>
          {darkTheme ? (
            <BiSun
              className="nav__change-theme"
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            />
          ) : (
            <BiMoon
              className="nav__change-theme"
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
