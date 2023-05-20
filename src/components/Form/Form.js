import { useState } from "react";

import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { TextField } from "../TextField/TextField";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [squad, setSquad] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.formSubmit({name, role, image, squad})
    setName("");
    setRole("");
    setImage("");
    setSquad(props.itens[0]);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit} action="">
        <h1>Fill in this form to create a collab card.</h1>
        <TextField
          required={true}
          label="Name"
          ph="Jane Doe"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Role"
          ph="Chief Executive"
          value={role}
          onChange={(value) => setRole(value)}
        />
        <TextField
          label="Image"
          ph="https://unsplash.com/photos/I_uFHRMccaw"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          label="Squad"
          itens={props.itens}
          value={squad}
          onChange={(value) => setSquad(value)}
        />
        <Button>Create</Button>
      </form>
    </section>
  );
};
