import { useContext } from "react";
import StaysContext from "../../context/StaysContext";
import Stay from "../Stay/Stay";
import "./Stays.scss";

const Stays = () => {
  const staysContext = useContext(StaysContext);

  return (
    <main>
      <div className="head">
        <h1>Stays in Finland</h1>
        <p>12+ stays</p>
      </div>
      <div className="stays-container">
        {staysContext.isLoading ? (
          <div className="spinner-container">
            <div className="spinner">
              <div className="spinner1"></div>
            </div>
          </div>
        ) : !staysContext.isLoading && staysContext.stays.length > 0 ? (
          <>
            {staysContext.stays.map((stay, i) => (
              <Stay key={i} stay={stay} />
            ))}
          </>
        ) : (
          <h2 className="errorMsg">Doesn't exist in Finland</h2>
        )}
      </div>
    </main>
  );
};

export default Stays;
