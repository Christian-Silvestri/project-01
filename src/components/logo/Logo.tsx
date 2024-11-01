import { LogoWrapper } from "./styles";
import logo from "../../assets/img/logo-ds.png";

const Logo = () => {
  return (
    <LogoWrapper>
      <img width={70} src={logo} alt="deal-sphere-logo" />
    </LogoWrapper>
  );
};

export default Logo;
