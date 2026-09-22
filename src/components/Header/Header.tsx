import "./Header.css";
import burgerMenuIcon from "../../assets/icons/burger-menu.svg";
import { useState } from "react";
import { ScrollLink } from "../ScrollLink/ScrollLink";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function handleNavigation() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header_container navigation">
        <button
          className="header_menuButton"
          type="button"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          onClick={handleMenuClick}
        >
          <img src={burgerMenuIcon} alt="" />
        </button>
        <ScrollLink
          to="/"
          className="header_logo"
          onClick={handleNavigation}
        >
          Logo
        </ScrollLink>
        <nav
          className={isMenuOpen ? "header_nav is-open" : "header_nav"}
          id="nav-menu"
        >
          <ul className="header_list">
            <li>
              <ScrollLink
                to="/#catalog"
                className="header_link"
                onClick={handleNavigation}
              >
                Каталог
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="/#about"
                className="header_link"
                onClick={handleNavigation}
              >
                О нас
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="/#faq"
                className="header_link"
                onClick={handleNavigation}
              >
                Вопросы
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <span className="header_city">Брянск</span>
      </div>
    </header>
  );
}
