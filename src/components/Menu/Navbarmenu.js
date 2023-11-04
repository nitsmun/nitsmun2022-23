import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
const Navbarmenu = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 93) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  const [isMenuSubMenuMore, setMenuSubMenuMore] = useState(false);
  const toggleSubmenuMore = () => {
    setMenuSubMenuMore(isMenuSubMenuMore === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  let boxClassSubMenuMore = ["sub__menus"];
  if (isMenuSubMenuMore) {
    boxClassSubMenuMore.push("sub__menus__Active");
  } else {
    boxClassSubMenuMore.push("");
  }
  return (
    <header className="header__middle">
      <div className={color ? "container container-bg" : "container"}>
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img
                className="img-left0"
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676475391/events/nitsmun/nitsmun_fjkrzp.png"
                alt="Nitsmun-logo"
              />
              <img
                className="img-left"
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676475320/events/nitsmun/logo-name-nitsmun_knlrie.svg"
                alt="Nitsmun-logo"
              />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <ImCross size={20} />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <GiHamburgerMenu />{" "}
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>

                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    Events <FiChevronDown className="nav-upsidedown" />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/youth-parliament`}
                      >
                        {" "}
                        Youth Parliament{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/nitsmun2023`}
                      >
                        {" "}
                        NITSMUN 2023{" "}
                      </NavLink>{" "}
                    </li>

                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/mockmun2023`}
                      >
                        {" "}
                        Mock MUN 2023{" "}
                      </NavLink>{" "}
                    </li>
                    {/* <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/junior_mun`}
                      >
                        Junior MUN{" "}
                      </NavLink>{" "}
                    </li> */}

                    {/* <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/mock_mun`}
                      >
                        Mock MUNs{" "}
                      </NavLink>{" "}
                    </li> */}
                  </ul>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/about`}
                  >
                    {" "}
                    About Us{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/team`}
                  >
                    {" "}
                    Our Team{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/segments`}
                  >
                    {" "}
                    Segments{" "}
                  </NavLink>{" "}
                </li>

                <li
                  onClick={toggleSubmenuMore}
                  className="menu-item sub__menus__arrows"
                  id="menu-more-item"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    More <FiChevronDown className="nav-upsidedown2" />{" "}
                  </Link>
                  <ul className={boxClassSubMenuMore.join(" ")}>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/inpictures`}
                      >
                        {" "}
                        Photo Gallery{" "}
                      </NavLink>{" "}
                    </li>
                    <li className="menu-item ">
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/archive`}
                      >
                        {" "}
                        Archive{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="apply-special"
                    to={`/apply`}
                  >
                    {" "}
                    <p className="nav-apply">Apply Now!</p>{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbarmenu;
