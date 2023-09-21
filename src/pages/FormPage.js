import React, { useEffect, useState } from "react";
import CheckBox from "../components/checkboxInput/CheckBox";
import DropDown from "../components/dropDownInput/DropDown";
import Text from "../components/textInput/Text";
import MultipleChoice from "../components/multipleChoiceInput/MultipleChoice";
import MultipleChoiceGrid from "../components/multipleChoiceGridInput/MultipleChoiceGrid";
import form from "../dataUtlis/formData.json";
import CheckboxesGrid from "../components/checkboxesGrid/CheckboxesGrid";
import Table from "../components/table/Table";

import {
  CHECKBOXES,
  CHECKBOXES_GRID,
  DATE,
  DROPDOWN,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_GRID,
  TABLE,
  TEXT,
} from "../utlis/CreateFormUtlis";
import { useForms } from "../context/FormsContext";
import DateInput from "../components/Date/DateInput";
import { getAnswers, storeAnswers } from "../dataUtlis/storageUtlis";
import SubmitButton from "../components/buttons/submitButton/SubmitButton";

/**
 * Component for rendering a form page with dynamic question components.
 *
 * @returns {JSX.Element} - The rendered form page.
 */
export default function FormPage() {
  const { questions, name } = form;
  const { formAnswers, setFormAnswers } = useForms([]);
  const [allRequiredFieldsFilled, setAllRequiredFieldsFilled] = useState(false);
  const [inputValidation, setInputValidation] = useState(
    questions.map(() => ({ valid: true }))
  );
  const [clickOnSubmit, setClickOnSubmit] = useState(false);

  useEffect(() => {
    let storedFormAnswers = getAnswers();
    setFormAnswers(storedFormAnswers?.answers);
  }, []);

  useEffect(() => {
    let answers = {
      answers: formAnswers,
    };
    storeAnswers(answers);

    const isAllRequiredFilled = questions.every((question, index) => {
      const formAnswer = formAnswers[question.id - 1];
      const isValid =
        !question.required ||+
        (formAnswer &&
          formAnswer.answers !== null &&
          formAnswer.answers !== "");
      setInputValidation((prevValidation) =>
        prevValidation.map((item, i) =>
          i === index ? { valid: isValid } : item
        )
      );

      return isValid;
    });
    setAllRequiredFieldsFilled(isAllRequiredFilled);
  }, [formAnswers, setFormAnswers, questions]);

  function submitForm(event) {
    event.preventDefault();
    if (allRequiredFieldsFilled) {
      storeAnswers({ answers: [] });
      setFormAnswers([]);
      window.location.reload()
    } else {
      console.log(formAnswers)
      setClickOnSubmit(true);
      const firstInvalidFieldIndex = inputValidation.findIndex(
        (item) => !item.valid
      );
      if (firstInvalidFieldIndex !== -1) {
        document
          .querySelectorAll(".form-input")
          [firstInvalidFieldIndex].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }
    }
  }

  return (
    <div className="p-5">
      <h1 className="mt-3 me-3">{name}</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="form-input">
            <label
              className={`mt-3 me-3 ${question.required ? "required-label" : ""}
     `}
            >
              {`Q${question.id}: ${question.question}`}
              {question.required && <span className="text-danger"> *</span>}
            </label>
            {renderQuestionComponent(question, index,clickOnSubmit&&question.required? true:false)}
          </div>
        ))}
        <button className="submit-button" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );

  /**
   * Renders the appropriate question component based on the answerType.
   *
   * @param {Object} question - The question object containing answerType.
   * @returns {JSX.Element|null} - The rendered question component or null if answerType is unsupported.
   */

  function renderQuestionComponent(question, index ,flag) {
    const { answerType, options, rows, columns, rowsNumber } = question;

    switch (answerType) {
      case CHECKBOXES:
        return <CheckBox options={options} question={question} required={flag} />;
      case DROPDOWN:
        return <DropDown options={options} question={question} required={flag}/>;
      case TEXT:
        return <Text question={question} required={flag}/>;
      case MULTIPLE_CHOICE:
        return <MultipleChoice options={options} question={question} required={flag}/>;
      case DATE:
        return <DateInput question={question} required={flag}/>;
      case MULTIPLE_CHOICE_GRID:
        return (
          <MultipleChoiceGrid
            rows={rows}
            columns={columns}
            question={question}
            required={flag}
          />
        );
      case CHECKBOXES_GRID:
        return (
          <CheckboxesGrid rows={rows} columns={columns} question={question} required={flag}/>
        );
      case TABLE:
        return (
          <Table
            rowsNumber={rowsNumber}
            columns={columns}
            question={question}
            required={flag}
          />
        );
      default:
        return null;
    }
  }
}
