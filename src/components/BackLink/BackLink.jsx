import { BackLink } from "./BackLink.styled";
import { TiArrowLeftThick } from "react-icons/ti";

const BackButton = () => {
 
  return (
    <BackLink to='/'>
      <TiArrowLeftThick />
      Back
    </BackLink>
  );
};

export default BackButton;
