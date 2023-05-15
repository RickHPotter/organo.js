import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { TextField } from "../TextField/TextField";
import "./Form.css";

export const Form = () => {
  const roles = ["bitch", "simp", "nazi", "lol-player (racist)", "unemployed"];
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Submitted.')
  }
  
  return (
    <section className="form">
      <form onSubmit={handleSubmit} action="">
        <h1>Fill in this form to create a collab card.</h1>
        <TextField required={true} label="Name" ph="Jane Doe" />
        <TextField required={true} label="Role" ph="Chief Executive" />
        <TextField label="Image" ph="https://unsplash.com/photos/I_uFHRMccaw" />
        <Dropdown required={true} label="Roles" itens={roles} />
        <Button>Create</Button>
      </form>
    </section>
  );
};
