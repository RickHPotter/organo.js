import "./TextField.css";

export const TextField = (props) => {
  return (
    <div className="form__group">
      <label id="name">{props.label}</label>
      <input type="text" name="username" placeholder={props.ph}/>
    </div>
  );
};
