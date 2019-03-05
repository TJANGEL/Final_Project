import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      <li>Impatient Netflixing</li>
      <li className="copyright">© 2019</li>
      <li>
        <a
          href="https://github.com/TJANGEL/impatient_netflixing"
          target="blank"
        >
          <span>
            <i className="fab fa-github" />{" "}
          </span>{" "}
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
