import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-links">
          <a
            className="c-social__link"
            href="https://github.com/sanjay-xdr"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            className="c-social__link"
            href="https://twitter.com/sanjayxdr"
            target="_blank"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            className="c-social__link"
            href="https://www.linkedin.com/in/sanjay-jaiswal-603757202/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            className="c-social__link"
            href="https://www.instagram.com/sanjayjaiswal._/"
            target="_blank"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>

        <section>
          <span className="c-social__link">Made by Sanjay</span>
        </section>
      </footer>
    </>
  );
}
