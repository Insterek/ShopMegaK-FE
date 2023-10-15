import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export const Contact = () => {
  const [reel, setReel] = useState("footer__container__box");
  const [btn, setButton] = useState(true);
  const rolled = () => {
    reel === "footer__container__box"
      ? setReel("footer__container__box rolled-up")
      : setReel("footer__container__box");
    setButton(!btn);
  };
  return (
    <div className="footer__container">
      <div className="footer__container__reel">
        <h2 className="footer-title">Contact</h2>
        <button className="footer-btn" onClick={rolled}>
          {btn ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
      <ul className={reel}>
        <p className="footer-link">Hotline: 600 320 852</p>
        <p className="footer-link">Smartphone: 440 304 703</p>
        <p className="footer-link">Email: Clothing-Store@gmail.com</p>
      </ul>
    </div>
  );
};
