import { EMPTY_FORM } from "../utlis/FormUtlis";

const FORM_QUESTION ='formQuestions';
const FORM_ANSWERS ='formAnswers';

export function storeForm(formQuestions) {
    localStorage.setItem(FORM_QUESTION, JSON.stringify(formQuestions));
}

export function getForm() {
    let storedFormQuestions = JSON.parse(localStorage.getItem(FORM_QUESTION));

    if(!storedFormQuestions || storedFormQuestions.length === 0){
        storedFormQuestions = EMPTY_FORM;
    }
    return storedFormQuestions;
}

export function storeAnswers(formAnswers) {
    localStorage.setItem(FORM_ANSWERS, JSON.stringify(formAnswers));
}

export function getAnswers() {
    const storedFormAnswers = JSON.parse(localStorage.getItem(FORM_ANSWERS));
    if (!storedFormAnswers || storedFormAnswers?.asnwers?.length === 0) {
        storedFormAnswers = {answers:[]};
    } 
    return storedFormAnswers;
}