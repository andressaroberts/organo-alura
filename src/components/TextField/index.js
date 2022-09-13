import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const [value, setValue] = useState("");

  const onType = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onType}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
