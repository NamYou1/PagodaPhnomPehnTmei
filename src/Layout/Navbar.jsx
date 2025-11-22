import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import LanguageToggle from "../components/LanguageToggle";
import logo from "../assets/Logo.jpg";
const Navbar = () => {
  const { t, language } = useTranslation();

  const links = [
    {
      label: t('nav.home'),
      path: "/",
    },
    {
      label: t('nav.about'),
      path: "about",
    },
    {
      label: t('nav.contact'),
      path: "contact",
    },
    , {
      label: t('nav.purpose'),
      path: "purpose",
    }
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-10 items-center"  >
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ">
            <a href="https://www.facebook.com/profile.php?id=100085604379815">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex px-5">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Navbar;
