import React from "react";
import "./styles.css";
const LearningOptions = (props) => {
  const options = [
    {
      text: "Workout",
      handler: props.actionProvider.handleStrengthTraining,
      id: 1,
    },
    { text: "Yoga", handler: props.actionProvider.handleYogaTraining, id: 2 },
    {
      text: "Calisthenics",
      handler: props.actionProvider.handleCalTraining,
      id: 3,
    },
    { text: "About Us", handler: () => {}, id: 4 },
    {
      text: "Contact Us",
      handler: props.actionProvider.contact,
      id: 5,
    },
  ];

  const optionnsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionnsMarkup}</div>;
};
export default LearningOptions;
