import React, { useContext } from "react";
import "./SearchDropdown.scss";
import FilterContext from "../../../context/FilterContext";
import StaysContext from "../../../context/StaysContext";
import { BiSearchAlt2 } from "react-icons/bi";
import Filter from "./Filter/Filter";

const SearchDropdown = () => {
  const { handleLocation, handleGuest, details, navIsOpen } =
    useContext(FilterContext);
  const staysContext = useContext(StaysContext);

  const locationText =
    details.location === "" ? "Add Location" : `${details.location}, Finland`;
  const guestsText =
    details.guests === 0 ? "Add Guests" : `${details.guests} guests`;

  const handleLocationClick = () => {
    handleLocation();
  };

  const handleGuestClick = () => {
    handleGuest();
  };

  const handleSearchClick = () => {
    staysContext.filter();
  };

  return (
    <>
      <div className="filterDrawer">
        <div className="location">
          <div onClick={handleLocationClick} className="myLocation">
            <span className={details.location === "" ? "empty" : "addLocation"}>
              {locationText}
            </span>
          </div>
        </div>
        <div className="guests">
          <div onClick={handleGuestClick} className="myGuests">
            <span className={details.guests === 0 ? "empty" : "addGuests"}>
              {guestsText}
            </span>
          </div>
        </div>
        <BiSearchAlt2
          onClick={handleSearchClick}
          color="#EB5757"
          size={25}
          cursor="pointer"
          className="mySearch"
        />
      </div>
      {navIsOpen && <Filter />}
    </>
  );
};

export default SearchDropdown;
