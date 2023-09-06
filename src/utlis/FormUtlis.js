export const TEXT = "Text";
export const CHECKBOXES = "Checkboxes";
export const DROPDOWN = "Dropdown";
export const MULTIPLE_CHOICE = "Multiple Choice";
export const TABLE = "Table";
export const MULTIPLE_CHOICE_GRID = "Multiple Choice Grid";
export const CHECKBOXES_GRID = "Checkboxes Grid";

export function resetProperties(question, propertiesToDelete) {
    const updatedQuestion = { ...question };
    propertiesToDelete.forEach((prop) => {
        delete updatedQuestion[prop];
    });
    return updatedQuestion;
}