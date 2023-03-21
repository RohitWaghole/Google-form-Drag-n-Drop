import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Options from "../../Options/Options";

import "./Text.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Text = ({ id }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [inputFields, setInputFields] = useState([{ id: uuidv4(), value: "" }]);

  const handleAddField = (e) => {
    e.preventDefault();
    setInputFields([...inputFields, { id: uuidv4(), value: "" }]);
  };

  const handleDeleteField = (id) => {
    setInputFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  return (
    <>
      <div className="singleChoice">
        <form className="form">
          <div className="question">
            <p
              style={{
                backgroundColor: "white",
                padding: "10px",
                fontSize: "1.3rem",
              }}
            >
              {id}.
            </p>
            <div className="FormTitle">
              <input
                type="text"
                className={`question-input inputField ${
                  inputValue.length === "0" ? "has-value" : ""
                }`}
                value={inputValue}
                onChange={handleChange}
              />
              <label className="inputPlaceholder">Question</label>
            </div>
          </div>
          <div className="options">
            {/* <input className="optionsInput textAns" type="text" /> */}
            <input
              type="text"
              className={`question-input inputField optionsInput textAns  ${
                inputValue.length === "0" ? "has-value" : ""
              }`}
              value={inputValue}
              onChange={handleChange}
            />
            <label className="inputPlaceholder newField">Answer</label>
          </div>
          <div className="line2"></div>
        </form>
        <Options id={id} />
      </div>
    </>
  );
};

export default Text;
