import logo from "../assets/image.png";
import searchPlant from "../assets/searchPlant.png";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <div className="header-contact-num">
        <p></p>
        <p>Free Shipping on orders above 999/-</p>
        <p className="phone-num">Call us on: +91 98768 05120</p>
      </div>
      <div className="header-menu-section">
        <div className="logo-container">
          <img src={logo} className="brand-logo" alt="brand-logo"/>
          <p>Chaperone</p>
        </div>
        <div className="menu-container">
          <a href="#">Home</a>
          <a href="#">Plants and pots</a>
          <a href="#">Tools</a>
          <a href="#">Our Services</a>
          <a href="#">Blog</a>
          <a href="#">Our Story</a>
          <a href="#">FAQs</a>
        </div>
        <div className="icons-container">
          <div className="profile-icon-container">
            <FiUser size={23} />
            <p>My Profile</p>
          </div>
          <div className="profile-icon-container">
            <FiShoppingCart size={23} />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <FiSearch size={19} />
          <input placeholder="Search Plant" className="search-input" />
          <img src={searchPlant} alt="search-plant" className="search-plant"/>
        </div>
      </div>
    </header>
  );
}
