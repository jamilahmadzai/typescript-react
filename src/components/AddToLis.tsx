import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList = (props: IProps) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    props.setPeople([
      ...props.people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({ name: "", age: "", note: "", img: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        name="note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
