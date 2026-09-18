import "./Catalog.css";
import { products } from "../../data/Products";
import { Card } from "../../components/Card/Card";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export function Catalog() {
  const [category, setCategory] = useState("все");

  function handleChange(categoryBtn: string): void {
    setCategory(categoryBtn);
  }

  return (
    <section className="catalog_container" id="catalog">
      <h2 className="text-h4">КАТЕГОРИИ</h2>
      <div className="catalog_filters">
        <button
          className={
            category === "все"
              ? "body-small filters_button is_category"
              : "body-small filters_button"
          }
          type="button"
          onClick={() => handleChange("все")}
        >
          Все
        </button>
        <button
          className={
            category === "куртка"
              ? "body-small filters_button is_category"
              : "body-small filters_button"
          }
          type="button"
          onClick={() => handleChange("куртка")}
        >
          Куртки
        </button>
        <button
          className={
            category === "пальто"
              ? "body-small filters_button is_category"
              : "body-small filters_button"
          }
          type="button"
          onClick={() => handleChange("пальто")}
        >
          Пальто
        </button>
        <button
          className={
            category === "пуховик"
              ? "body-small filters_button is_category"
              : "body-small filters_button"
          }
          type="button"
          onClick={() => handleChange("пуховик")}
        >
          Пуховики
        </button>
      </div>
      <div className="cards_container">
        <AnimatePresence mode="popLayout">
          {products
            .filter((item) => {
              return category === "все" || item.category === category;
            })
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  category={item.category}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  imageAlt={item.imageAlt}
                />
              );
            })}
        </AnimatePresence>
      </div>
    </section>
  );
}
