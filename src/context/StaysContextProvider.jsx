import { useContext, useEffect, useState } from "react";
import StaysContext from "./StaysContext";
import FilterContext from "./FilterContext";
import data from "../../stays.json";
import { toast } from "sonner";

const StaysContextProvider = (props) => {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterContxt = useContext(FilterContext);

  useEffect(() => {
    setStays(data);
    setFilteredStays(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filter = () => {
    if (
      filterContxt.details.location === "" &&
      filterContxt.details.guests === 0
    ) {
      toast.error("Please specify a place or companions in the search engine");
      return;
    } else {
      filterContxt.closeNav();
      const filteredStays = stays.filter((stay) => {
        return filterContxt.details.location !== "" &&
          filterContxt.details.guests !== 0
          ? stay.city === filterContxt.details.location &&
              filterContxt.details.guests <= stay.maxGuests
          : filterContxt.details.location === "" &&
            filterContxt.details.guests !== 0
          ? filterContxt.details.guests <= stay.maxGuests
          : stay.city === filterContxt.details.location;
      });
      setFilteredStays(filteredStays);
    }
  };

  const updatedContext = {
    isLoading: isLoading,
    stays: filteredStays,
    filter: filter,
  };

  return (
    <StaysContext.Provider value={updatedContext}>
      {props.children}
    </StaysContext.Provider>
  );
};

export default StaysContextProvider;
