import "./Hero.css";
import hero from "../../assets/images/hero-defile.webp";
import heroTablet from "../../assets/images/hero-defile-tablet.webp";
import heroMobile from "../../assets/images/hero-defile-mobile.webp";

export function Hero() {
  return (
    <section>
      <div className="hero_container">
        <picture>
          <source
            media="(max-width: 932px) and (max-height: 500px) and (orientation: landscape)"
            srcSet={hero}
          />

          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <source media="(max-width: 1024px)" srcSet={heroTablet} />

          <img
            src={hero}
            alt="Женщина в чёрной верхней одежде"
            className="hero_photo"
          />
        </picture>
        <div className="description_container">
          <div className="description_container_title">
            <h1 className="text-h1">Женская верхняя одежда</h1>
            <h2 className="text-h2">
              Современные силуэты. <br />
              Натуральные материалы. <br />
              Размеры 44–60.
            </h2>
          </div>
          <div className="description_container_text">
            <p className="body">
              Коллекция пальто, курток и плащей для повседневных и деловых
              образов. Лаконичный дизайн, комфорт и внимание к деталям.
            </p>
          </div>
          <a href="#catalog" className="a_catalog button-large">
            Перейти в каталог
          </a>
        </div>
      </div>
    </section>
  );
}
