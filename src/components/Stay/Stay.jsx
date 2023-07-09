import { BiSolidStar } from "react-icons/bi";
import "./Stay.scss";

const Stay = ({ stay }) => {
  const { photo, superHost, type, beds, rating, title } = stay;

  return (
    <div className="stay">
      <img src={photo} alt={photo.name} />
      <div className="stay-info-container">
        <div className="stay-info">
          {superHost && <span className="superhost">SUPER HOST</span>}
          <span className="stay-type">{type}</span>
          {beds && <span className="beds">. {beds} beds</span>}
        </div>
        <div className="rating">
          <BiSolidStar color="#EB5757" size={15} />
          <span className="value">{rating}</span>
        </div>
      </div>
      <span className="title">{title}</span>
    </div>
  );
};

export default Stay;
