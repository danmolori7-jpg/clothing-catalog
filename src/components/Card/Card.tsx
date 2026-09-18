import type { Product } from "../../schemas/productSchema";
import { motion } from "motion/react";
import { forwardRef } from "react";

export const Card = forwardRef<HTMLElement, Product>(function Card(item, ref) {
  return (
    <motion.article
      ref={ref}
      className="card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 0, y: 8 }}
      layout="position"
    >
      <img src={item.image} alt={item.imageAlt} className="card_photo" />
      <div className="card_description">
        <h3 className="body-large">{item.name}</h3>
        <p className="button-large">{item.price} ₽</p>
      </div>
      <a href="#card" className="card_button button-small">
        К товару
      </a>
    </motion.article>
  );
});
