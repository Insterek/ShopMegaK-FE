import "./style/Slider.css";
import img1 from "../../../../images/img1.jpg";
import img2 from "../../../../images/img2.jpg";
import img3 from "../../../../images/img3.jpg";
import img4 from "../../../../images/img4.jpg";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const imgUrl = [img1, img2, img3, img4];
export const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    setImageIndex((index) => {
      if (index === imgUrl.length - 1) return 0;
      return index + 1;
    });
  };

  const nextImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imgUrl.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const imgInterval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(imgInterval);
  }, []);

  return (
    <section className="slider">
      <img
        src={imgUrl[imageIndex]}
        alt="slider with images"
        className="slider__img"
      />
      <button className="slider__btn prev" onClick={prevImage}>
        <FaAngleLeft />
      </button>
      <button className="slider__btn next" onClick={nextImage}>
        <FaAngleRight />
      </button>
    </section>
  );
};
