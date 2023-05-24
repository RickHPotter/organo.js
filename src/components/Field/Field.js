import "./Field.css";

export const Field = ({ type = 'text', label, required, ph, value, onChange }) =>
{
  return (
    <div className={`form--group ${type}`}>
      <label id="name">{label}</label>
      <input
        required={required}
        type={type}
        name="username"
        placeholder={ph}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};