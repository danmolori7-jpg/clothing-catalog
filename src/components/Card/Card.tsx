import type { Product } from "../../schemas/productSchema";
import { motion } from "motion/react";
import { forwardRef } from "react";
import { Link } from "react-router";

export const Card = forwardRef<HTMLElement, Product>(function Card(props, ref) {
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
      <img src={props.image} alt={props.imageAlt} className="card_photo" />
      <div className="card_description">
        <h3 className="body-large">{props.name}</h3>
        <p className="button-large">{props.price} ₽</p>
      </div>
      <Link to={`/products/${props.id}`} className="card_button button-small">
        К товару
      </Link>
    </motion.article>
  );
});
