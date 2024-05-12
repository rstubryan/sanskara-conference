import logo from "../../assets/logo.svg";
import ColorTheme from "../atoms/Color/index.jsx";

const Header = ({ color }) => {
  return (
    <>
      <ColorTheme color={color}>
        <div className="flex h-[90px] items-center justify-center">
          <img src={logo} alt="" height="60" width="158" />
        </div>
      </ColorTheme>
    </>
  );
};

export default Header;
