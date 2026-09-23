import "./Catalog.css";
import { products } from "../../data/Products";
import { Card } from "../../components/Card/Card";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export function Catalog() {
  type SortOrder = "default" | "price-asc" | "price-desc";

  const [category, setCategory] = useState("все");
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const normalozedSearch = searchValue.trim().toLowerCase();
  const visibleProducts = products.filter((item) => {
    const matchesCategory = category === "все" || item.category === category;

    const matchesSearch = item.name
      .trim()
      .toLowerCase()
      .includes(normalozedSearch);

    return matchesCategory && matchesSearch;
  });

  const sortedProducts =
    sortOrder === "default"
      ? visibleProducts
      : [...visibleProducts].sort((a, b) => {
          if (sortOrder === "price-asc") {
            return a.price - b.price;
          }

          return b.price - a.price;
        });

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
      <input
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Введите название товара"
        aria-label="Поиск товара по названию"
        className="search"
      />
      <div className="catalog_sort">
        <label htmlFor="sort_order">Сортировать:</label>

        <select
          id="sort_order"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value as SortOrder);
          }}
        >
          <option value="default">По умолчанию</option>
          <option value="price-asc">Сначала дешевле</option>
          <option value="price-desc">Сначала дороже</option>
        </select>
      </div>
      <div className="cards_container">
        <AnimatePresence mode="popLayout">
          {visibleProducts.length === 0 ? (
            <p className="catalog_empty" role="status">
              Товары не найдены
            </p>
          ) : (
            sortedProducts.map((item) => {
              return <Card key={item.id} {...item} />;
            })
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
