import React, { useContext } from "react";
import "./Guests.scss";
import FilterContext from "../../../../context/FilterContext";

const Guests = () => {
  const filterContext = useContext(FilterContext);
  const {
    currentProp,
    handleGuest,
    details,
    removeAdults,
    addAdults,
    removeChildren,
    addChildren,
  } = filterContext;
  const { guests, adults, children } = details;

  const handleRemoveAdults = () => {
    removeAdults();
  };

  const handleAddAdults = () => {
    addAdults();
  };

  const handleRemoveChildren = () => {
    removeChildren();
  };

  const handleAddChildren = () => {
    addChildren();
  };

  return (
    <div className="myGuestsBlock">
      <div
        className={
          currentProp === "guests" ? "current selectGuests" : "selectGuests"
        }
      >
        <div onClick={handleGuest} className="guestsBlock">
          <small>GUESTS</small>
          <p className={guests === 0 ? "empty my-Guests" : "my-Guests"}>
            {guests === 0 ? "Add guests" : `${guests} guests`}
          </p>
        </div>
        {currentProp === "guests" && (
          <div className="guestsDropDown">
            <div className="adults">
              <h4>Adults</h4>
              <p>Ages 13 or above</p>
              <div className="buttonBlock">
                <button onClick={handleRemoveAdults}>-</button>
                <span>{adults}</span>
                <button onClick={handleAddAdults}>+</button>
              </div>
            </div>
            <div className="children">
              <h4>Children</h4>
              <p>Ages 2-12</p>
              <div className="buttonBlock">
                <button onClick={handleRemoveChildren}>-</button>
                <span>{children}</span>
                <button onClick={handleAddChildren}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;
