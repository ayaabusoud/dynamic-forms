import { TEXT } from "./CreateFormUtlis";

export const EMPTY_QUESTION= {
  id:  1,
  question: '',
  answerType: TEXT,
  required: false
}

export const EMPTY_FORM = {
  name: '',
  questions: [EMPTY_QUESTION]
}


  export function updateAnswers(setFormAnswers,questionId,answers){
    setFormAnswers((prevFormAnswers) => {
        const questionIndex = prevFormAnswers.findIndex(
          (item) => item.questionId === questionId
        );
  
        if (questionIndex !== -1) {
          prevFormAnswers[questionIndex].answers = answers;
          return [...prevFormAnswers];
        } else {
          return [
            ...prevFormAnswers,
            { questionId: questionId, answers },
          ];
        }
      });
  }