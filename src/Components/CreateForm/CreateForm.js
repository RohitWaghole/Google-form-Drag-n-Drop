import React, { useState } from "react";
import "./CreateForm.css";
import Card from "./Card/SIngleChoice/Card";
import MultipleChoiceCard from "./Card/MultipleChoiceCard/MultipleChoiceCard";
import TextCard from "./Card/TextCard/TextCard";
import SingleCorrect from "./QuestionTypes/SingleCorrect/SingleCorrect";
import MultipleChoice from "./QuestionTypes/MultipleChoice/MultipleChoice";
import Text from "./QuestionTypes/Text/Text";

const CreateForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [cards, setCards] = useState([]);
  var singleCorrectCount = cards.length + 1;
  var MultipleChoiceCount = cards.length + 1;
  var TextCount = cards.length + 1;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("dropped");
    // console.log(e.dataTransfer.getData('id'))
    const id = e.dataTransfer.getData("id");
    if (id === "singleCorrect") {
      console.log("singleCorrectPlaced");
      setCards([...cards, <SingleCorrect id={singleCorrectCount} />]);
      singleCorrectCount = singleCorrectCount + 1;
    } else if (id === "multipleChoice") {
      console.log("checkbox :");
      setCards([...cards, <MultipleChoice id={MultipleChoiceCount} />]);
      MultipleChoiceCount = MultipleChoiceCount + 1;
    } else if (id === "text") {
      setCards([...cards, <Text id={TextCount} />]);
      TextCount = TextCount + 1;
    }
  };

  return (
    <>
      <div className="CreateFormContainer">
        <div className="FormContainer">
          <div className="TopNavigation">
            <div className="Heading">Square</div>
          </div>
          <div className="SideNavigation">
            <p className="NavOption">A</p>
          </div>
        </div>

        <div className="FormContainer">
          {/* <h1 className="surveyLink">Surveys &#62; Add New Survey</h1> */}
          <div className="Elements">
            <h1 className="ElementsHeading">
              List of available question types
            </h1>
            <h1 className="line"> </h1>
            <Card />
            <MultipleChoiceCard />
            <TextCard />
          </div>
          <div className="DraggableArea">
            <div className="FormTitle">
              <input
                type="text"
                className={`input input-field ${
                  inputValue.length === "0" ? "has-value" : ""
                }`}
                value={inputValue}
                onChange={handleChange}
              />
              <label className="input-placeholder">Survey Title</label>
              <input type="date" className="input" />
            </div>
            <div
              className="DroppableArea"
              onDrop={(e) => {
                handleDrop(e);
              }}
              onDragOver={handleDragOver}
            >
              <div className="DropHere">Drag Here</div>
            </div>
            {cards.map((Card, index) => {
              return (
                <li key={index} className="listStyle">
                  {Card}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
