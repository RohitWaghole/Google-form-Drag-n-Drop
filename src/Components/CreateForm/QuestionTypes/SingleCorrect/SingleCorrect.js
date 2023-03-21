import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Options from "../../Options/Options";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./SingleCorrect.css";

const SingleCorrect = ({ id }) => {
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
            {/* {console.log("rendering")} */}
            {inputFields.map((field, index) => {
              return (
                <div className="option-input" key={field.id}>
                  <input type="radio" className="checkingBtn" name="answer" />
                  <span className="span"> </span>
                  <span className="span"> </span>
                  <span className="span"> </span>
                  <label>
                    <input
                      className="optionsInput"
                      value={field.value}
                      placeholder={`Option ${index + 1}`}
                      onChange={(e) => {
                        const newInputFields = [...inputFields];
                        const index = newInputFields.findIndex(
                          (f) => f.id === field.id
                        );
                        newInputFields[index].value = e.target.value;
                        setInputFields(newInputFields);
                      }}
                    />
                  </label>
                  <button
                    key={index}
                    id={index}
                    onClick={() => handleDeleteField(field.id)}
                    className="span newSpan"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            })}
            <button className="addOptionBtn" onClick={handleAddField}>
              + Add Option
            </button>
          </div>
          <div className="line2"></div>
        </form>
        <Options id={id} />
      </div>
    </>
  );
};

export default SingleCorrect;
