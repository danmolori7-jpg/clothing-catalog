import { ScrollLink } from "../ScrollLink/ScrollLink";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer_container">
        <div className="footer_intro">
          <ScrollLink
            className="footer_logo"
            to="/"
            aria-label="Clothing Catalog — главная"
          >
            <span>Clothing</span>
            <span>Catalog</span>
          </ScrollLink>
          <p className="footer_description body-small">
            Каталог женской верхней одежды с адаптивным интерфейсом.
          </p>
        </div>

        <nav className="footer_navigation" aria-label="Навигация в подвале">
          <p className="footer_heading body-small">Навигация</p>
          <ul className="footer_list">
            <li>
              <ScrollLink to="/">Главная</ScrollLink>
            </li>
            <li>
              <ScrollLink to="/#catalog">Каталог</ScrollLink>
            </li>
          </ul>
        </nav>

        <div className="footer_location">
          <p className="footer_heading body-small">Город</p>
          <p>Брянск</p>
        </div>

        <div className="footer_questions" id="faq">
          <p className="footer_heading body-small">Вопросы</p>
          <a href="https://t.me/belinimoz" target="_blank" rel="noreferrer">
            Написать автору
          </a>
        </div>
      </div>

      <div className="footer_bottom">
        <p className="footer_author body-small">
          Учебный проект для портфолио · Автор{" "}
          <a href="https://t.me/belinimoz" target="_blank" rel="noreferrer">
            Dan
          </a>
        </p>
        <p className="footer_disclaimer body-small">
          Товары и цены вымышлены.
        </p>
      </div>
    </footer>
  );
}
