import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingBag,
  FaSearch,
} from "react-icons/fa";
import "./style/Navigation.css";
import { Link } from "react-router-dom";
import { ListBtn } from "../../common/ListBtn";
import { SyntheticEvent, useState } from "react";

export const Navigation = () => {
  const [activeBars, setActiveBars] = useState("nav__list");
  const [activeSearch, setActiveSearch] = useState("global-search");
  const [bars, setBars] = useState(true);
  const formSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setActiveSearch("global-search");
  };
  const navToggle = () => {
    activeBars === "nav__list"
      ? setActiveBars("nav__list active-bars")
      : setActiveBars("nav__list");
    setBars(!bars);
  };
  const searchToggle = () => {
    if (activeSearch === "global-search") {
      setActiveSearch("global-search active-search");
    }
  };
  const closeMainMenu = () => {
    setActiveBars("nav__list");
    setBars(true);
  };
  return (
    <nav className="nav">
      <div className="nav__section">
        <Link className="nav__section__brand" to="/" onClick={closeMainMenu}>
          Clothing-Store
        </Link>
        <form onSubmit={formSubmit} className={activeSearch}>
          <input
            type="text"
            className="global-search__input"
            placeholder="What you need ?"
          />
          <button type="submit" className="global-search__btn">
            <FaSearch className="fa-search-desktop" />
          </button>
        </form>
        <div className="nav__section__user-menu">
          <FaSearch
            className="user-icon fa-search-mobile"
            onClick={searchToggle}
          />
          <Link to="/user">
            <FaUser className="user-icon" />
          </Link>
          <Link to="/basket">
            <FaShoppingBag className="user-icon" />
          </Link>
          <div onClick={navToggle} className="bars">
            {bars ? (
              <FaBars className="user-icon" />
            ) : (
              <FaTimes className="user-icon" />
            )}
          </div>
        </div>
      </div>
      <ul className={activeBars}>
        <ListBtn
          link="/all_clothes"
          title="All Clothes"
          closeMenu={navToggle}
        />
        <ListBtn link="/category/men" title="Men" closeMenu={navToggle} />
        <ListBtn link="/category/woman" title="Woman" closeMenu={navToggle} />
        <ListBtn
          link="/category/accessories"
          title="Accessories"
          closeMenu={navToggle}
        />
        <ListBtn
          link="/category/footwear"
          title="Footwear"
          closeMenu={() => setActiveBars("nav__list")}
        />
      </ul>
    </nav>
  );
};
