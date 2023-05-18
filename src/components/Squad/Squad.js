import "./Squad.css";

export const Squad = (props) => {
  return (
    <section
      className="squad"
      style={{ backgroundColor: props.secondaryColour }}
    >
      <h3 style={{borderColor: props.primaryColour}}>{props.name}</h3>
    </section>
  );
};
