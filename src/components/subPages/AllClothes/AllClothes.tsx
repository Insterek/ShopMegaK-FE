import { useEffect, useState } from "react";
import { AdEntity } from "types";
import { OneProductRow } from "./OneProductRow";
import "./style/AllClothes.css";
export const AllClothes = () => {
  const [allProduct, setAllProduct] = useState<AdEntity[] | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3002/products");
      const data = await res.json();
      setAllProduct(data.productList);
    })();
  }, []);
  return (
    <ul className="one-product">
      {allProduct?.map((product) => (
        <OneProductRow product={product} key={product.id} />
      ))}
    </ul>
  );
};
