import "./Header.css";
import burgerMenuIcon from "../../assets/icons/burger-menu.svg";
import { useState } from "react";
import { Link } from "react-router";

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
        <Link to="/" className="header_logo">
          Logo
        </Link>
        <nav
          className={isMenuOpen ? "header_nav is-open" : "header_nav"}
          id="nav-menu"
        >
          <ul className="header_list">
            <li>
              <Link to="/#catalog" className="header_link">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/#about" className="header_link">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/#faq" className="header_link">
                Вопросы
              </Link>
            </li>
          </ul>
        </nav>
        <span className="header_city">Брянск</span>
      </div>
    </header>
  );
}
