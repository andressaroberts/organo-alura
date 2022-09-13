import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const teams = [
    "Operations",
    "Marketing",
    "Design",
    "Development",
    "Research",
  ];

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onRegisterCollaborator({ name, position, image, team });

    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2> Fill in the data to create the collaborator's card </h2>
        <TextField
          mandatory={true}
          label="Name"
          placeholder="Insert your name..."
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          mandatory={true}
          label="Position"
          placeholder="Insert your position..."
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <TextField
          label="Image"
          placeholder="Insert image URL..."
          value={image}
          onChange={(value) => setImage(value)}
        />
        <Dropdown
          mandatory={true}
          label="Team"
          itens={props.teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button> Create Card </Button>
      </form>
    </section>
  );
};

export default Form;
