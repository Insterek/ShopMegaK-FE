import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { FootComp } from "types";
import { Link } from "react-router-dom";

export const FootComponent = (props: FootComp) => {
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
        <h2 className="footer-title">{props.title}</h2>
        <button className="footer-btn" onClick={rolled}>
          {btn ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </div>
      <ul className={reel}>
        <Link className="footer-link" to={props.linkOne}>
          {props.titleOne}
        </Link>
        <Link className="footer-link" to={props.linkTwo}>
          {props.titleTwo}
        </Link>
        <Link className="footer-link" to={props.linkThree}>
          {props.titleThree}
        </Link>
        <Link className="footer-link" to={props.linkFour}>
          {props.titleFour}
        </Link>
      </ul>
    </div>
  );
};
