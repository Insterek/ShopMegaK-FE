import "./style/utils.css";
import imgGears from "../../images/gears.png";
export const NotFoundView = () => {
  return (
    <div className="not-found">
      <img src={imgGears} alt="gears" className="not-found__img" />
      <strong className="not-found__info">
        We apologize an error occurred or this page is repairing...
      </strong>
    </div>
  );
};
