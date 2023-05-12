import React, { useState } from "react";

function CreateArea(props) {
  const [entry, setEntry] = useState({
    title: "",
    content: ""
  });

  function handleChange(evt) {
    let { name, value } = evt.target;
    setEntry((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(evt) {
    evt.preventDefault();
    props.addNote(entry);
    setEntry({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form onChange={handleChange}>
        <input value={entry.title} name="title" placeholder="Title" />
        <textarea
          value={entry.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
