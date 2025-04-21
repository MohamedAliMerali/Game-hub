import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const LogoLink = () => {
  return (
    <Link
      className="w-24 mr-2 hover:cursor-pointer hover:scale-110 transition-all duration-300 hover:rotate-90"
      to={"/"}
    >
      <img src={logo} alt="game hub logo" />
    </Link>
  );
};

export default LogoLink;
