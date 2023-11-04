import { Link } from "react-router-dom";
import { LinkBtn } from "types";
interface Props extends LinkBtn {
  closeMenu: () => void;
}
export const ListBtn = (props: Props) => {
  return (
    <Link className="nav__list__link" to={props.link} onClick={props.closeMenu}>
      {props.title}
    </Link>
  );
};
