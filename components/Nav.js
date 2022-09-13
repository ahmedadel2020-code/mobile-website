import navStyles from "../styles/Nav.module.css";
import Logo from "../asset/images/Logo.svg";
import Search from "../asset/images/Search.svg";
import Profile from "../asset/images/Profile.svg";
import Cart from "../asset/images/Cart.svg";
import Image from "next/image";

const Nav = () => {
  return (
    <div className={navStyles.container}>
      <div className={navStyles.logo}>
        <Image src={Logo} alt="apple logo" />
      </div>
      <ul className={navStyles.listContainer}>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>TV</li>
        <li>Accessories</li>
        <li>Offers</li>
      </ul>
      <div className={navStyles.vert_divider}></div>
      <ul className={`${navStyles.listContainer} ${navStyles.second_list}`}>
        <li>Support</li>
        <li>Services</li>
        <li>Locations</li>
      </ul>
      <div className={navStyles.icon}>
        <Image src={Search} alt="search" />
      </div>
      <div className={navStyles.icon}>
        <Image src={Profile} alt="profile" />
      </div>
      <div className={navStyles.icon}>
        <Image src={Cart} alt="cart" />
      </div>
    </div>
  );
};

export default Nav;
