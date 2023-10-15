import { FootComponent } from "../../common/FooterComp";
import { Contact } from "./Contact/Contact";
import "./style/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <FootComponent
          title="Before shopping"
          linkOne="/cost-delivery"
          titleOne="Cost of delivery"
          linkTwo="/delivery-pickup"
          titleTwo="Delivery pickup"
          linkThree="/payment-methods"
          titleThree="Payment methods"
          linkFour="/availability"
          titleFour="Availability of goods"
        />
        <FootComponent
          title="After shopping"
          linkOne="/order-status"
          titleOne="Order status"
          linkTwo="/complaint"
          titleTwo="Complaint"
          linkThree="/return-commodity"
          titleThree="Return commodity"
          linkFour="/blog"
          titleFour="Blog"
        />
        <FootComponent
          title="About the store"
          linkOne="/about-us"
          titleOne="About us"
          linkTwo="/statute"
          titleTwo="Statute"
          linkThree="/privacy-policy"
          titleThree="Privacy policy"
          linkFour="/contact"
          titleFour="Contact"
        />
        <Contact />
      </footer>
    </>
  );
};
