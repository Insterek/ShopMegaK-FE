import { Link } from "react-router-dom";
import { LinkBtn } from "types";
export const ListBtn = (props: LinkBtn) => {
  return (
    <Link className="nav__list__link" to={props.link}>
      {props.title}
    </Link>
  );
};
