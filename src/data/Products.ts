import type { Product } from "../schemas/productSchema";
import photo1 from "../assets/images/1.webp";
import photo2 from "../assets/images/2.webp";
import photo3 from "../assets/images/3.webp";
import photo4 from "../assets/images/4.webp";
import photo5 from "../assets/images/5.webp";
import photo6 from "../assets/images/6.webp";
import photo7 from "../assets/images/7.webp";
import photo8 from "../assets/images/8.webp";

// Демоданные: цены выдуманы, фото пока не соответствуют товарам.
export const products: Product[] = [
  {
    id: "1",
    name: "Куртка «Город»",
    category: "куртка",
    price: 5990,
    image: photo1,
    imageAlt: "Крупный план бордовых кожаных перчаток",
  },
  {
    id: "2",
    name: "Пальто «Силуэт»",
    category: "пальто",
    price: 12990,
    image: photo2,
    imageAlt: "Крупный план голубых джинсов с бежевой нашивкой",
  },
  {
    id: "3",
    name: "Пуховик «Север»",
    category: "пуховик",
    price: 15990,
    image: photo3,
    imageAlt: "Синее трикотажное изделие с высоким воротником",
  },
  {
    id: "4",
    name: "Куртка «Ритм»",
    category: "куртка",
    price: 7990,
    image: photo4,
    imageAlt: "Красная клетчатая рубашка на модели",
  },
  {
    id: "5",
    name: "Пальто «Линия»",
    category: "пальто",
    price: 14990,
    image: photo5,
    imageAlt: "Крупный план оливкового трикотажа с молнией",
  },
  {
    id: "6",
    name: "Пуховик «Облако»",
    category: "пуховик",
    price: 18990,
    image: photo6,
    imageAlt: "Коричневые ботильоны на тёмной упаковочной бумаге",
  },
  {
    id: "7",
    name: "Куртка «Ветер»",
    category: "куртка",
    price: 9990,
    image: photo7,
    imageAlt: "Голубой шарф с бахромой на металлическом стуле",
  },
  {
    id: "8",
    name: "Пальто «Классика»",
    category: "пальто",
    price: 16990,
    image: photo8,
    imageAlt: "Чёрно-белое фото джинсов и белой рубашки на модели",
  },
];
