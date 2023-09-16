export const TEXT = "Text";
export const CHECKBOXES = "Checkboxes";
export const DROPDOWN = "Dropdown";
export const MULTIPLE_CHOICE = "Multiple Choice";
export const TABLE = "Table";
export const MULTIPLE_CHOICE_GRID = "Multiple Choice Grid";
export const CHECKBOXES_GRID = "Checkboxes Grid";
export const DATE = "Date";

export function resetQuestionFormat(id, option, formQuestions, setFormQuestions) {
    let propertiesToDelete = [];
    if (option === TEXT) {
        propertiesToDelete = ['options', 'rows', 'columns', 'rowsNumber'];
    } else if (option === CHECKBOXES || option === MULTIPLE_CHOICE || option === DROPDOWN) {
        propertiesToDelete = ['rows', 'columns', 'rowsNumber'];
    } else if (option === MULTIPLE_CHOICE_GRID || option === CHECKBOXES_GRID) {
        propertiesToDelete = ['options', 'rowsNumber'];
    } else {
        propertiesToDelete = ['options', 'rows'];
    }
    resetProperties(id, propertiesToDelete, formQuestions, setFormQuestions);
}

export function resetProperties(questionId, propertiesToDelete, formQuestions = [], setFormQuestions) {
    const updatedArrayOfQuestions = formQuestions.map((question) => {
        if (question.id === questionId) {
            const updatedQuestion = { ...question };
            propertiesToDelete.forEach((prop) => {
                delete updatedQuestion[prop];
            });
            return updatedQuestion;
        }
        return question;
    });

    setFormQuestions(updatedArrayOfQuestions);
}


export function updateProperty(itemName, updatedValue, formQuestions, setFormQuestions, questionId) {
    const updatedArrayOfQuestions = formQuestions.map((question) => {
        if (question.id === questionId) {
            return { ...question, [itemName]: updatedValue };
        }
        return question;
    });

    setFormQuestions(updatedArrayOfQuestions);
}