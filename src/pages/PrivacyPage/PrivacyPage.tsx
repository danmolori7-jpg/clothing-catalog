import { ScrollLink } from "../../components/ScrollLink/ScrollLink";
import "./PrivacyPage.css";

export function PrivacyPage() {
  return (
    <main className="privacy_page">
      <div className="privacy_content">
        <ScrollLink className="privacy_backLink body-small" to="/">
          ← Вернуться на главную
        </ScrollLink>

        <header className="privacy_header">
          <p className="privacy_eyebrow body-small">Учебный проект</p>
          <h1 className="privacy_title text-h2">
            Политика конфиденциальности
          </h1>
          <p className="privacy_updated body-small">
            Дата публикации: 5 октября 2026 года
          </p>
        </header>

        <section className="privacy_section" aria-labelledby="privacy-general">
          <h2 id="privacy-general" className="text-h4">
            1. Общая информация
          </h2>
          <p>
            Clothing Catalog — некоммерческий учебный проект для портфолио.
            Сайт не является интернет-магазином, не принимает заказы и платежи.
          </p>
          <p>
            Настоящая политика объясняет, какие технические сведения могут
            обрабатываться при посещении сайта.
          </p>
        </section>

        <section className="privacy_section" aria-labelledby="privacy-no-data">
          <h2 id="privacy-no-data" className="text-h4">
            2. Какие данные сайт не запрашивает
          </h2>
          <p>
            На сайте нет регистрации, личного кабинета, форм обратной связи,
            комментариев, подписки или оформления заказа. Код проекта не
            использует системы веб-аналитики и не устанавливает собственные
            файлы cookie.
          </p>
        </section>

        <section
          className="privacy_section"
          aria-labelledby="privacy-technical"
        >
          <h2 id="privacy-technical" className="text-h4">
            3. Технические сведения
          </h2>
          <p>
            При открытии страниц инфраструктура хостинг-провайдера может
            автоматически обрабатывать IP-адрес, дату и время запроса,
            запрошенный адрес страницы, тип запроса, код ответа сервера,
            реферер и сведения о браузере (User-Agent).
          </p>
          <p>
            Эти сведения необходимы для доставки страниц, обеспечения
            работоспособности и безопасности хостинга, а также диагностики
            технических ошибок. Они не используются автором проекта для
            рекламы, рассылок или составления профилей посетителей.
          </p>
        </section>

        <section className="privacy_section" aria-labelledby="privacy-hosting">
          <h2 id="privacy-hosting" className="text-h4">
            4. Хостинг и хранение
          </h2>
          <p>
            Сайт размещён на виртуальном хостинге АО «ТаймВэб». Автоматическая
            выгрузка журналов доступа и ошибок в директорию сайта отключена.
            При этом Timeweb сообщает, что технические журналы за прошедший
            период могут быть доступны владельцу аккаунта для заказа в пределах
            180 дней.
          </p>
          <p>
            Подробнее об обработке данных самим хостинг-провайдером можно узнать
            в{" "}
            <a
              href="https://timeweb.com/ru/personal-data-apps/"
              target="_blank"
              rel="noreferrer"
            >
              политике Timeweb
            </a>
            .
          </p>
        </section>

        <section className="privacy_section" aria-labelledby="privacy-links">
          <h2 id="privacy-links" className="text-h4">
            5. Внешние ссылки
          </h2>
          <p>
            На сайте есть ссылки на Telegram и документы третьих лиц. После
            перехода по внешней ссылке обработка данных регулируется правилами
            соответствующего сервиса.
          </p>
        </section>

        <section className="privacy_section" aria-labelledby="privacy-contact">
          <h2 id="privacy-contact" className="text-h4">
            6. Связь с автором
          </h2>
          <p>
            По вопросам, связанным с этой политикой и техническими данными,
            можно написать автору проекта Dan в Telegram:{" "}
            <a href="https://t.me/belinimoz" target="_blank" rel="noreferrer">
              @belinimoz
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
