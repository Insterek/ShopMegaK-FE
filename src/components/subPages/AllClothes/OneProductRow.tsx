import { Link } from "react-router-dom";
import { AdEntity } from "types";

interface Props {
  product: AdEntity;
}
export const OneProductRow = (props: Props) => {
  return (
    <li className="one-product__item" key={props.product.id}>
      <img
        className="one-product__item__img"
        src={props.product.img_url}
        alt={props.product.title}
      />
      <h2 className="one-product__item__title">{props.product.title}</h2>
      <Link
        className="one-product__item__link"
        to={`/products/${props.product.id}`}
      >
        More info
      </Link>
    </li>
  );
};
