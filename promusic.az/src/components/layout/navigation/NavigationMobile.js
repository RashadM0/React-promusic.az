import React from "react";
import "./Navigation.scss";
import LogoLight from "../../../assets/images/logo/LogoLight";
import { BsSearch, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { GrMail } from "react-icons/gr";

export default function NavigationMobile() {
  return (
    <div className="mobile-navbar">
      <div className="mobile-container">
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <LogoLight />
          </div>
        </div>
        <div className="mobile-menu-content">
          <form className="form-group undefined">
            <input
              className="search-input"
              name="search"
              placeholder="Products Search..."
              autoComplete="off"
            />
            <button type="submit" className="search-btn">
              <BsSearch className="search-icon" style={{ color: "white" }} />
            </button>
          </form>
          <div className="mobile-menu-tracking">
            <a className="Order-mobile-menu">
              <IoMdPaperPlane className="plane-icon" />
              Track the orders
            </a>
          </div>
          <ul className="categories">
            <li>
              <a>Keys</a>
            </li>
            <li>
              {" "}
              <a>Guitars</a>
            </li>
            <li>
              <a>Studio</a>
            </li>
            <li>
              <a>Audio</a>
            </li>
            <li>
              <a>Microphones</a>
            </li>
            <li>
              <a>Drums</a>
            </li>
            <li>
              <a>Violin&Chello</a>
            </li>
            <li>
              <a>Winds</a>
            </li>
            <li>
              <a>Folks</a>
            </li>
            <li>
              <a>Cables</a>
            </li>
          </ul>
          <div className="social d-flex justify-content-between">
            <a href="mailto:info@promusic.az">
              <GrMail className="social-icon mail-icon" />
            </a>
            <a href="https://www.facebook.com/Promusic.az">
              <BsFacebook className="social-icon facebook-icon" />
            </a>
            <a href="https://www.instagram.com/promusic.az/">
              <BsInstagram className="social-icon instagram-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCKheavekuxhbnLFjKXL6MhA">
              <BsYoutube className="social-icon youtube-icon" />
            </a>
          </div>
          <div className="contact-mobile-menu d-flex">
            <div className="pages d-flex">
              <a href="">Contact</a>
              <a href="">About</a>
              <a href="">Customer service</a>
            </div>
            <div className="mobile-lang d-flex">
              <a href="">Az</a>
              <a href="">En</a>
              <a href="">Ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
