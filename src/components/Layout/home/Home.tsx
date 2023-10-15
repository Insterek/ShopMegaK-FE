import { Benefits } from "./Benefits/Benefits";
import { Newsletter } from "./Newsletter/Newsletter";
import { Slider } from "./Slider/Slider";
export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Benefits />
      <Newsletter />
    </div>
  );
};
