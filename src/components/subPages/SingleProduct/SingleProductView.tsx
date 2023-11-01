import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleProductRes } from "types";
import "./style/singleProduct.css";

export const OneProductView = () => {
  const [productInfo, setProductInfo] = useState<GetSingleProductRes | null>(
    null
  );
  const { idOfProduct } = useParams();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3002/products/${idOfProduct}`);
      setProductInfo(await res.json());
    })();
  }, []);
  if (productInfo === null) {
    return null;
  }
  console.log(productInfo.product);
  return (
    <div className="single-product">
      <div className="single-product__box">
        <h2 className="single-product__box__title">
          {productInfo.product.title}
        </h2>
        <img
          className="single-product__box__img"
          src={productInfo.product.img_url}
          alt={productInfo.product.title}
        />
      </div>
      <div className="single-product__box second-box">
        <p className="second-box__desc-title">Description:</p>
        <span className="second-box__desc">
          {productInfo.product.description}
        </span>
        <p className="second-box__price">Price: {productInfo.product.price}€</p>
        <button className="second-box__btn">Add to basket</button>
      </div>
    </div>
  );
};
