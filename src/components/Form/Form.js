import { useState } from "react";

import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Field } from "../Field/Field";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [squad, setSquad] = useState('');
  
  const [nameSquad, setNameSquad] = useState('');
  const [colourSquad, setColourSquad] = useState('#000000');

  const handleSubmitCollab = (event) => {
    event.preventDefault();
    props.collabSubmit({name, role, image, squad})
    setName("");
    setRole("");
    setImage("");
    setSquad(props.itens[0]);
  };

  const handleSubmitSquad = (event) => {
    event.preventDefault();
    props.squadSubmit({name: nameSquad, primaryColour: colourSquad})
    setNameSquad("");
    setColourSquad("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmitCollab} action="">
        <h1>Fill in this form to create a collab card.</h1>
        <Field
          required
          label="Name"
          ph="Jane Doe"
          value={name}
          onChange={(value) => setName(value)}
        />
        <Field
          required
          label="Role"
          ph="Chief Executive"
          value={role}
          onChange={(value) => setRole(value)}
        />
        <Field
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

      <form onSubmit={handleSubmitSquad} action="">
        <h1>Fill in this form to create a Squad card.</h1>
        <Field
          required
          label="Name"
          ph="Anonymous Virgins Squad"
          value={nameSquad}
          onChange={(value) => setNameSquad(value)}
        />
        <Field
          required
          type="color"
          label="Colour"
          ph="Chief Executive"
          value={colourSquad}
          onChange={(value) => setColourSquad(value)}
        />
        <Button>Create New Squad</Button>
      </form>
    </section>
  );
};
