import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "nav--black"}`}>
      <Link to="/">
        <img
          className="nav__logo"
          src="https://e7.pngegg.com/pngimages/314/996/png-clipart-the-walt-disney-studios-the-walt-disney-company-martin-j-greenberg-law-office-llc-studio-logo-company-text.png"
          alt="Applogo"
        />
      </Link>

      <Link to="/liked">
        <img
          className="nav__avatar"
          src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Nav;
