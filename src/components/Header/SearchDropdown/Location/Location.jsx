import { useContext } from "react";
import "./Location.scss";
import { MdLocationOn } from "react-icons/md";
import FilterContext from "../../../../context/FilterContext";

const Location = () => {
  const filterContext = useContext(FilterContext);
  const { currentProp, handleLocation, details, handleMyLocation } =
    filterContext;
  const { location } = details;

  const locations = [
    {
      id: 1,
      place: "Helsinki",
    },
    {
      id: 2,
      place: "Turku",
    },
    {
      id: 3,
      place: "Oulu",
    },
    {
      id: 4,
      place: "Vaasa",
    },
  ];

  const handleLocationClick = () => {
    handleLocation();
  };

  return (
    <div className="myLocationBlock">
      <div
        className={
          currentProp === "location"
            ? "current selectLocation"
            : "selectLocation"
        }
      >
        <div onClick={handleLocationClick} className="locationBlock">
          <small>LOCATION</small>
          <p className={location === "" ? "empty myPosition" : "myPosition"}>
            {location === "" ? "Add location" : `${location}, Finland`}
          </p>
        </div>
        {currentProp === "location" && (
          <div className="locationDropDown">
            <ul>
              {locations.map((location) => (
                <li
                  onClick={() => handleMyLocation(location.place)}
                  className="locationItem"
                  key={location.id}
                >
                  <MdLocationOn color="#4F4F4F" size={25} />
                  <p>{location.place}, Finland</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
