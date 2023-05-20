import { Collab } from "../Collab/Collab";
import "./Squad.css";

export const Squad = (props) => {
  const squadCss = { backgroundColor: props.secondaryColour };
  const h3Css = { borderColor: props.primaryColour };

  return (
    props.collabs.length > 0 && (
      <section className="squad" style={squadCss}>
        <h3 style={h3Css}>{props.name}</h3>

        <div className="container">
          {props.collabs.map((collab) => (
            <Collab
              key={collab.name}
              name={collab.name}
              role={collab.role}
              image={collab.image}
              backgroundColour={props.primaryColour}
            />
          ))}
        </div>
      </section>
    )
  );
};
