import WinLogo from "../../assets/logo.png";
import "./Header.scss";
import SearchDropdown from "../Header/SearchDropdown/SearchDropdown";

const Header = () => {
  return (
    <div className="nav-container">
      <a href="/" className="img-logo">
        <img src={WinLogo} alt="winbnbLogo" />
      </a>
      <div className="search">
        <SearchDropdown />
      </div>
    </div>
  );
};

export default Header;
