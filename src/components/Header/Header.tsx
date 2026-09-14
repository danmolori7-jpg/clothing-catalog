import "./Header.css";
import burgerMenuIcon from "../../assets/icons/burger-menu.svg";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((previousState) => !previousState);
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
        <a href="/" className="header_logo">
          Logo
        </a>
        <nav
          className={isMenuOpen ? "header_nav is-open" : "header_nav"}
          id="nav-menu"
        >
          <ul className="header_list">
            <li>
              <a href="#catalog" className="header_link">
                Каталог
              </a>
            </li>
            <li>
              <a href="#about" className="header_link">
                О нас
              </a>
            </li>
            <li>
              <a href="#faq" className="header_link">
                Вопросы
              </a>
            </li>
          </ul>
        </nav>
        <span className="header_city">Брянск</span>
      </div>
    </header>
  );
}
