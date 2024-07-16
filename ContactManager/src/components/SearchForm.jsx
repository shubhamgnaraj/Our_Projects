import React from "react";
import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import ErrorMsg from "./ErrorMsg";

function SearchForm({ numberUserName }) {
  const [noValue, setNoValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [error, setError] = useState("");

  const handleOnChangeNo = (e) => {
    const valueOf = e.target.value;
    if (/^\d*$/.test(valueOf)) {
      setNoValue(valueOf);
      setError("");
    } else {
      setError("please enter only numbers");
      setNoValue();
    }
  };

  const handleOnChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const handleAddButtonClicked = () => {
    numberUserName(noValue, nameValue);
    setNoValue("");
    setNameValue("");
  };

  return (
    <>
      <div className="search_form">
        <ErrorMsg error={error} />

        <input
          type="text"
          placeholder=" Enter your no"
          className="input_box"
          onChange={handleOnChangeNo}
          value={noValue}
          // onKeyPress={handleKeyPress}
        />
        <input
          type="text"
          placeholder=" Enter your username"
          className="input_box"
          onChange={handleOnChangeName}
          value={nameValue}
        />
        <button className="add_contact_btn" onClick={handleAddButtonClicked}>
          {" "}
          <IoPersonAdd />
        </button>
      </div>
    </>
  );
}

export default SearchForm;
