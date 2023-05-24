import Collab from "../Collab";
import "./Squad.css";

import hexToRgba from "hex-to-rgba";

export const Squad = ({squad, collabs, onChangeColour, deleteCollab, favouriteCollab}) => {
  const squadCss = {
    backgroundImage: "url(/images/background.png)",
    backgroundColor: hexToRgba(squad.primaryColour, '0.5'),
    
  };
  const h3Css = { borderColor: squad.primaryColour };

  return (
    collabs.length > 0 && (
      <section className="squad" style={squadCss}>
        <input
          value={squad.primaryColour}
          type="color"
          className="input-colour"
          id="colour"
          onChange={(event) =>
            onChangeColour(squad.id, event.target.value)
          }
        />
        <h3 style={h3Css}>{squad.name}</h3>

        <div className="container">
          {collabs.map((collab) => (
            <Collab
              key={collab.id}
              collab={collab}
              backgroundColour={squad.primaryColour}
              onFavourite={favouriteCollab}
              onDelete={deleteCollab}
            />
          ))}
        </div>
      </section>
    )
  );
};
