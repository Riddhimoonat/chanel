import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">ZUDIO</div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>EXPLORE ZUDIO.COM</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ONLINE SERVICES</h4>
          <ul>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Shipping Options</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>BOUTIQUE SERVICES</h4>
          <ul>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Book a Visit</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>THE HOUSE OF ZUDIO</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal Statement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Responsible Fashion</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-lang">
          <p>Change location and language — India / English</p>
        </div>

        <div className="footer-social">
          <FaInstagram />
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-legal">
        ZUDIO INDIA PRIVATE LIMITED, Corporate Office: Trent House, G Block, BKC,
        Mumbai, Maharashtra — 400051, INDIA
      </div>
    </footer>
  );
};

export default Footer;
