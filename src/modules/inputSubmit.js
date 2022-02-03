import {toGenitiveCase} from "./cases";
import {toDativeCase} from "./cases";
import {toAccusativeCase} from "./cases";
import {toInstrumentalCase} from "./cases";
import {toPrepositionalCase} from "./cases";

const inputSubmit = () => {
    const inputText = document.querySelector('.input__area');
    const inputSubmit = document.querySelector('.input__submit');
    const caseWord = document.querySelectorAll('.case__word');
    const casesContainer = document.querySelector('.cases__container');

    inputSubmit.addEventListener('click', (event) => {
        casesContainer.style.display = 'flex';

        caseWord[0].textContent = toGenitiveCase(inputText.value);
        caseWord[1].textContent = toDativeCase(inputText.value);
        caseWord[2].textContent = toAccusativeCase(inputText.value);
        caseWord[3].textContent = toInstrumentalCase(inputText.value);
        caseWord[4].textContent = toPrepositionalCase(inputText.value);
    })
};

export default inputSubmit;