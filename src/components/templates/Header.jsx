import logo from "../../assets/logo.svg";

const Header = (props) => {
  return (
    <>
      <div className="flex h-[90px] items-center justify-center bg-green-500">
        <img src={logo} alt="" height="60" width="158" />
      </div>
    </>
  );
};

export default Header;
