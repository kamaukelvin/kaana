import React from "react";
import styled from "styled-components";

export const StyledLogo = styled.div`
  img {
    object-fit: contain;
    max-height: 75px;
    width: 100%;
  }
`;

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <StyledLogo className="logo">
          <a href="/" title="Kaana">
            <img
              src="/assets/images/logo.jpg"
              alt="Kaana Logo"
              title="Kaana Logo"
            />
          </a>
        </StyledLogo>
        <div className="contact-details">
          <p className="mail">
            <a href>kaana@gmail.com</a>
            <span className="fa fa-envelope" />
          </p>
          <p className="phone-no">
            <i>+254 712 345 678</i>
            <span className="fa fa-phone" />
          </p>
        </div>
      </div>
      <div id="menu-container">
        <div className="container">
          <nav id="main-menu">
            <div className="dt-menu-toggle" id="dt-menu-toggle">
              Menu
              <span className="dt-menu-toggle-icon" />
            </div>
            <ul id="menu-main-menu" className="menu">
              <li className=" current_page_item menu-item-simple-parent menu-item-depth-0 blue">
                {" "}
                <a href="index.html"> Home </a>
              </li>
              <li className="mustard">
                {" "}
                <a href="about.html"> About us </a>{" "}
              </li>
              <li className=" menu-item-simple-parent menu-item-depth-0 red ">
                {" "}
                <a href="our-staffs.html"> Shop </a>{" "}
              </li>
              <li className="menu-item-megamenu-parent megamenu-4-columns-group menu-item-depth-0 steelblue">
                {" "}
                <a href="services.html"> Contact Us </a>{" "}
              </li>
            </ul>
          </nav>
          <ul className="dt-sc-social-icons">
            <li>
              <a
                href
                title="Facebook"
                className="dt-sc-tooltip-top facebook"
              >
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href title="Youtube" className="dt-sc-tooltip-top youtube">
                <span className="fa fa-youtube" />
              </a>
            </li>
            <li>
              <a href title="Twitter" className="dt-sc-tooltip-top twitter">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href
                title="Google Plus"
                className="dt-sc-tooltip-top gplus"
              >
                <span className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
