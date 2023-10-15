import "./style/Newsletter.css";
export const Newsletter = () => {
  return (
    <div className="news">
      <div className="news__info">
        <h2 className="news__info__title">Subscribe to the Newsletter</h2>
        <p className="news__info__description">
          To receive information about discounts.
        </p>
      </div>
      <form className="news__form">
        <input
          className="news__form__input"
          type="text"
          placeholder="Write your address email"
        />
        <button type="submit" className="news__form__btn">
          Send
        </button>
      </form>
    </div>
  );
};
