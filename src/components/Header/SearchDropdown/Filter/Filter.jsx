import { useContext } from "react";
import Guests from "../Guests/Guests";
import Location from "../Location/Location";
import "./Filter.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import FilterContext from "../../../../context/FilterContext";
import StaysContext from "../../../../context/StaysContext";

const Filter = () => {
  const { navIsOpen, closeNav } = useContext(FilterContext);
  const staysContext = useContext(StaysContext);

  const handleFilterClick = () => {
    staysContext.filter();
  };

  return (
    <div className={navIsOpen ? "filter active" : ""}>
      <nav className="myFilterNav">
        <MdClose size={30} onClick={closeNav} className="close" />
        <div className="nav">
          <Location />
          <Guests />
          <div className="actions">
            <button onClick={handleFilterClick} className="myFilterBtn">
              <BiSearchAlt2 color="white" size={25} />
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Filter;
