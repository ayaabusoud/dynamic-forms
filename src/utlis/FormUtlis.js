

  export function updateAnswers(setFormAnswers,question,answers){
    setFormAnswers((prevFormAnswers) => {
        const questionIndex = prevFormAnswers.findIndex(
          (item) => item.id === question.id
        );
  
        if (questionIndex !== -1) {
          prevFormAnswers[questionIndex].answers = answers;
          return [...prevFormAnswers];
        } else {
          return [
            ...prevFormAnswers,
            { id: question.id, question: question.question, answers },
          ];
        }
      });
  }