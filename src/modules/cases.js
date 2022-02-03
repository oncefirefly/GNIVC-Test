import {firstDeclension} from "./declensions";
import {secondDeclension} from "./declensions";
import {thirdDeclension} from "./declensions";
import isRuConsonant from "./isRuConsonant";

export const toGenitiveCase = (word) => {
    const lastLetterIndex = word.length - 1;
    let splitWord = word.split('');

    if (firstDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = '(и/ы)';

    } else if (secondDeclension(splitWord, lastLetterIndex)) {

        if (isRuConsonant(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {
            splitWord.push('(а/я)');
        } else if (splitWord[lastLetterIndex] === 'й') {
            splitWord[lastLetterIndex] = 'я';
        } else {
            splitWord[lastLetterIndex] = '(а/я)';
        }

    } else if (thirdDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = 'и';

    }

    return splitWord.join('');
};

export const toDativeCase = (word) => {
    const lastLetterIndex = word.length - 1;
    let splitWord = word.split('');

    if (firstDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = 'e';

    } else if (secondDeclension(splitWord, lastLetterIndex)) {

        if (isRuConsonant(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {
            splitWord.push('у');
        } else if (splitWord[lastLetterIndex] === 'й') {
            splitWord[lastLetterIndex] = 'ю';
        } else {
            splitWord[lastLetterIndex] = 'у';
        }

    } else if (thirdDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = 'и';

    }

    return splitWord.join('');
};

export const toAccusativeCase = (word) => {
    const lastLetterIndex = word.length - 1;
    let splitWord = word.split('');

    if (firstDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = '(у/ю)';

    }

    return splitWord.join('');
};

export const toInstrumentalCase = (word) => {
    const lastLetterIndex = word.length - 1;
    let splitWord = word.split('');

    if (firstDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = '(ой/ей)';

    } else if (secondDeclension(splitWord, lastLetterIndex)) {

        if (isRuConsonant(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {
            splitWord.push('ом');
        } else if (splitWord[lastLetterIndex] === 'й') {
            splitWord[lastLetterIndex] = 'ем';
        } else {
            splitWord.push('м');
        }

    } else if (thirdDeclension(splitWord, lastLetterIndex)) {

        splitWord.push('ю');

    }

    return splitWord.join('');
};

export const toPrepositionalCase = (word) => {
    const lastLetterIndex = word.length - 1;
    const firstLetterIndex = 0;
    let splitWord = word.split('');

    if (firstDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = 'е';

    } else if (secondDeclension(splitWord, lastLetterIndex)) {

        if (isRuConsonant(splitWord[lastLetterIndex]) && splitWord[lastLetterIndex] !== 'й') {
            splitWord.push('е');
        } else if (splitWord[lastLetterIndex] === 'й') {
            splitWord[lastLetterIndex] = 'е';
        } else {
            splitWord[lastLetterIndex] = 'е';
        }

    } else if (thirdDeclension(splitWord, lastLetterIndex)) {

        splitWord[lastLetterIndex] = 'и';

    }

    if (isRuConsonant(splitWord[firstLetterIndex])) {
        return 'о' + ' ' + splitWord.join('');
    } else {
        return 'об' + ' ' + splitWord.join('');
    }
};
