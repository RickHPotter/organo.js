import { TextField } from "../TextField/TextField";
import './Form.css'

export const Form = () => {
  return (
    <section className="form">
      <form action="">
        <h1>Fill in this form to create a collab card.</h1>
        <TextField label="Name" ph="Jane Doe" />
        <TextField label="Role" ph="Chief Executive" />
        <TextField label="Image" ph="https://unsplash.com/photos/I_uFHRMccaw" />
      </form>
    </section>
  );
};
