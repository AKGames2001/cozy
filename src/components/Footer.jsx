import React from "react";
import { IoMdCard } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
import "../resources/css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer-ribbon">
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
        <div className="ribbon-item">
          <IoMdCard style={{ fontSize: "24px" }} />
          <div className="ribbon-item-text">
            <p>Free Delivery</p>
            <p>From $50 & Up</p>
          </div>
        </div>
      </div>
      <div className="footer-tab">
        <div className="footer-tab-title">
          <h3>AKGAMEZ</h3>
          <p>+91-1234567890</p>
          <p>221B Baker Street</p>
        </div>
        <div className="footer-tab-sections">
          <div className="footer-section">
            <div className="footer-section-header">
              <p>About Us</p>
            </div>
            <div className="footer-section-options">
              <p>Company</p>
              <p>News</p>
              <p>Investors</p>
              <p>Careers</p>
              <p>Government Relations</p>
              <p>Policies</p>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-header">
              <p>Shop By Category</p>
            </div>
            <div className="footer-section-options">
              <p>Today's Deal</p>
              <p>Best Seller</p>
              <p>New Arrivals</p>
              <p>Top Rated</p>
              <p>Popular</p>
              <p>Featured</p>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-header">
              <p>Support & Service</p>
            </div>
            <div className="footer-section-options">
              <p>Customer Service</p>
              <p>Protection Plan</p>
              <p>Schedule a Service</p>
              <p>Track-in Program</p>
              <p>Product Recalls</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-header">
              <p>Partnership</p>
            </div>
            <div className="footer-section-options">
              <p>Affliate Program</p>
              <p>Developers</p>
              <p>Mediamarket Ignite</p>
              <p>Media Market for Education</p>
              <p>Media Market Direct</p>
              <p>Advertise with Us</p>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-section-header">
              <p>Customer Care</p>
            </div>
            <div className="footer-section-options">
              <p>My Accounts</p>
              <p>Track Orders</p>
              <p>Shop</p>
              <p>Wishlist</p>
              <p>Compare</p>
              <p>Returns/Exchange</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-search">
        <div className="footer-search-bar">
          <input placeholder="Email"/>
          <button className="footer-search-bar-btn">Subscribe</button>
        </div>
        <p>
          Copyright <FaRegCopyright /> Aditya Kore 2024
        </p>
      </div>
    </>
  );
}

export default Footer;
