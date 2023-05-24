import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Collab.css";

export const Collab = ({ collab, backgroundColour, onDelete, onFavourite }) => {
  const collabHeaderCss = { backgroundColor: backgroundColour };
  const toggleFavourite = () => onFavourite(collab.id);
  const attFavourite = {
    className: "favourite-icon",
    size: 25,
    color: "red",
    onClick: toggleFavourite,
  };

  return (
    <div className="collab">
      <AiFillCloseCircle
        className="delete"
        size={25}
        onClick={() => onDelete(collab.id)}
      />
      <div className="collab-header" style={collabHeaderCss}>
        <img src={collab.image} alt="" />
      </div>
      <div className="collab-footer">
        <h4>{collab.name}</h4>
        <h5>{collab.role}</h5>
        <div className="favourite">
          {collab.favourite ? (
            <AiFillHeart {...attFavourite} />
          ) : (
            <AiOutlineHeart {...attFavourite} />
          )}
        </div>
      </div>
    </div>
  );
};
