import { useParams } from "react-router";
import { products } from "../../data/Products";
import { ScrollLink } from "../../components/ScrollLink/ScrollLink";
import "./ProductPage.css";

export function ProductPage() {
  const { productId } = useParams();

  const product = products.find((item) => {
    return item.id === productId;
  });

  if (product === undefined) {
    return (
      <main className="product_page product_page--empty">
        <h1 className="text-h3">Товар не найден</h1>
        <p className="body">Проверьте адрес или вернитесь к каталогу.</p>
        <ScrollLink to="/#catalog" className="product_backLink button-large">
          ← Вернуться в каталог
        </ScrollLink>
      </main>
    );
  }

  const formattedPrice = new Intl.NumberFormat("ru-RU").format(product.price);

  return (
    <main className="product_page">
      <nav
        className="product_breadcrumbs body-small"
        aria-label="Хлебные крошки"
      >
        <ol>
          <li>
            <ScrollLink to="/#catalog">Каталог</ScrollLink>
          </li>
          <li aria-hidden="true">/</li>
          <li>{product.category}</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <article className="product_details">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product_photo"
        />

        <div className="product_info">
          <p className="product_status body-small">
            {product.isAvailable ? "В наличии" : "Нет в наличии"}
          </p>
          <h1 className="product_title text-h2">{product.name}</h1>
          <p className="product_price text-h4">{formattedPrice} ₽</p>
          <p className="product_description body">{product.description}</p>

          <dl className="product_specs">
            <div>
              <dt>Размеры</dt>
              <dd>{product.sizes.join(", ")}</dd>
            </div>
            <div>
              <dt>Цвета</dt>
              <dd>{product.colors.join(", ")}</dd>
            </div>
            <div>
              <dt>Материал</dt>
              <dd>{product.material}</dd>
            </div>
          </dl>

          <ScrollLink
            className="product_collectionLink button-large"
            to="/#catalog"
          >
            Смотреть коллекцию
          </ScrollLink>
          <p className="product_note body-small">
            Учебный демонстрационный проект. Товар не предназначен для продажи.
            Характеристики и цена вымышлены.
          </p>
        </div>
      </article>
    </main>
  );
}
