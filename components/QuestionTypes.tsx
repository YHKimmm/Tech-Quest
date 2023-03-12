import React from "react";
import PropTypes from "prop-types";

interface QuestionTypesProps {
  selectedQuestionType: string;
  handleQuestionTypeSelect: (type: string) => void;
}

export default function QuestionTypes({
  selectedQuestionType,
  handleQuestionTypeSelect,
}: QuestionTypesProps) {
  const questionTypes = [
    "Opening",
    "Motivation",
    "Situational",
    "Behavioral",
    "Skills-Based",
    "About You",
    "Interviewer Q's",
    "Technical Q's",
    "Analytical Q's",
    "Closing",
  ];

  console.log(selectedQuestionType);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto relative mb-12">
        <h1 className="text-2xl text-center md:text-3xl font-medium">
          Choose Interview Question Type
        </h1>
        <div className="grid grid-cols-2 mt-3">
          {questionTypes.map((type, idx) => (
            <button
              key={idx}
              onClick={() => handleQuestionTypeSelect(type)}
              className={`bg-${
                selectedQuestionType === type
                  ? "gray-900 text-white bg-gray-700 hover:bg-gray-700"
                  : "gray-200 text-gray-700"
              } bg-gray rounded-full px-4 py-2 m-4 font-bold text-base focus:outline-none hover:bg-gray-200 transition-colors duration-300`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

QuestionTypes.propTypes = {
  selectedQuestionType: PropTypes.string.isRequired,
  handleQuestionTypeSelect: PropTypes.func.isRequired,
};
