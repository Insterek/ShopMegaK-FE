import { Link } from "react-router-dom";
import "./style/Basket.css";
export const Basket = () => {
  return (
    <div className="basket">
      <p className="basket__text">Your basket is empty.</p>
      <Link to="/all_clothes" className="btn basket__btn">
        Back to shop list
      </Link>
    </div>
  );
};
