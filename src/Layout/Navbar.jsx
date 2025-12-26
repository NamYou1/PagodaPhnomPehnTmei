import React from "react";
import { NavLink } from "react-router-dom";
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
      path: "/about",
    },
    {
      label: t('nav.contact'),
      path: "/contact",
    },
    {
      label: t('nav.purpose'),
      path: "purpose",
    },
    {
      label: t('nav.Activities'),
      path: "/activities",
    },
    // {
    //   label: t('nav.Dharma'),
    //   path: "/dhama-lessons",
    // }
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm px-10 items-center fixed top-0 left-0 right-0 z-50  backdrop-blur-md"  >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded ${isActive ? 'text-primary font-semibold bg-primary/10' : 'text-base-600'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full">
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
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-primary font-semibold bg-primary/10' : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {label}
              </NavLink>
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
