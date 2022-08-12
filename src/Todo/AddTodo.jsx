import { useState } from "react";
import RenderTip from "../RenderTip";

const AddTodo = (props) => {
  const { onAddTodo } = props;
  const [value, setValue] = useState("");

  const atChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const atSubmit = (e) => {
    e.preventDefault();
    onAddTodo(value);
    setValue("");
  };

  return (
    <div>
      <RenderTip />
      <form className="d-flex" onSubmit={atSubmit}>
        <input type="text" value={value} onChange={atChange} />
        <button type="button" className="btn btn-primary" onClick={atSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
