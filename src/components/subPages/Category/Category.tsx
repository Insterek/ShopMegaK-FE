import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdEntity } from "types";
import { OneProductRow } from "../AllClothes/OneProductRow";

export const Category = () => {
  const [category, setCategory] = useState<AdEntity[] | null>(null);
  const { categoryName } = useParams();
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3002/category/${categoryName}`);
      const data = await res.json();
      setCategory(data.productCategory);
    })();
  }, [category]);
  console.log(category);
  return (
    <ul className="one-product width-product">
      {category?.map((product) => (
        <OneProductRow product={product} key={product.id} />
      ))}
    </ul>
  );
};
