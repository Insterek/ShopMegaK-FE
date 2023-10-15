import { IconType } from "react-icons/lib";
type benefits = {
  text: string;
  icon: IconType;
};
export const BenefitsComp = ({ text, icon }: benefits) => {
  const Icon = icon;
  return (
    <div className="benefits__box">
      <Icon className="benefits__box__icon" />
      <p className="benefits__box__description">{text}</p>
    </div>
  );
};
