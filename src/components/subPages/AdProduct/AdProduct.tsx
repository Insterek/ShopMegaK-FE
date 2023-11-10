import { SyntheticEvent, useState } from "react";
import "./style/AdProduct.css";
import { Spinner } from "../../utils/Spinner";
import { AdEntity } from "types";

export const AdProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    img_url: "",
    price: Number(""),
    category: "",
  });
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };
  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3002/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data: AdEntity = await res.json();
      setResultInfo(`You added product about title ${data.title}`);
    } finally {
      setLoading(false);
      setForm({
        title: "",
        description: "",
        img_url: "",
        price: Number(""),
        category: "",
      });
    }
  };
  if (loading) {
    return <Spinner />;
  }
  if (resultInfo !== null) {
    return (
      <div className="result-info">
        <p className="result-info__text">{resultInfo}</p>
        <button
          className="result-info__btn btn"
          onClick={() => setResultInfo(null)}
        >
          Add another one
        </button>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <form className="ad-product" onSubmit={sendForm}>
        <input
          type="text"
          className="ad-product__input"
          placeholder="Product title"
          value={form.title}
          onChange={(e) => updateForm("title", e.target.value)}
        />
        <textarea
          cols={30}
          rows={10}
          placeholder="Description"
          className="ad-product__area"
          value={form.description}
          onChange={(e) => updateForm("description", e.target.value)}
        ></textarea>
        <input
          type="number"
          className="ad-product__input"
          placeholder="Price"
          value={form.price}
          onChange={(e) => updateForm("price", e.target.value)}
        />
        <input
          type="text"
          className="ad-product__input"
          placeholder="Image link"
          value={form.img_url}
          onChange={(e) => updateForm("img_url", e.target.value)}
        />
        <select
          value={form.category}
          className="ad-product__input"
          name="category"
          onChange={(e) => updateForm("category", e.target.value)}
        >
          <option>men</option>
          <option>woman</option>
          <option>accessories</option>
          <option>footwear</option>
        </select>
        <button type="submit" className="btn ad-product__btn">
          Ad product
        </button>
      </form>
    </div>
  );
};
