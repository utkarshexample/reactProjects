import { useSelector } from "react-redux";
import Controls from "./Controls";
import DisplayCounter from "./DisplayCounter";
import PrivacyMsg from "./PrivacyMsg";

const Hero = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="text-center">
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMsg /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </div>
    </>
  );
};

export default Hero;
