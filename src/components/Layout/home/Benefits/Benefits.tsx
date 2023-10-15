import {
  FaAtlas,
  FaCalculator,
  FaPercent,
  FaShopify,
  FaTruck,
} from "react-icons/fa";
import "./style/Benefits.css";
import { BenefitsComp } from "../../../common/BenefitsComp";
export const Benefits = () => {
  return (
    <section className="benefits">
      <BenefitsComp icon={FaTruck} text="Cheapest delivery" />
      <BenefitsComp icon={FaCalculator} text="Guaranteed small price" />
      <BenefitsComp icon={FaAtlas} text="The highest products choice" />
      <BenefitsComp icon={FaShopify} text="Deals for you" />
      <BenefitsComp icon={FaPercent} text="Bests discounts" />
    </section>
  );
};
