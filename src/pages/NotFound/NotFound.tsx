import { ScrollLink } from "../../components/ScrollLink/ScrollLink";
import "./NotFound.css";

export function NotFound() {
  return (
    <main className="not_found">
      <div className="not_found_content">
        <p className="not_found_code" aria-hidden="true">
          404
        </p>
        <h1 className="text-h2">Страница не найдена</h1>
        <p className="not_found_text">
          Возможно, адрес изменился или такой страницы больше нет.
        </p>
        <ScrollLink to="/" className="not_found_link">
          Вернуться на главную
        </ScrollLink>
      </div>
    </main>
  );
}
