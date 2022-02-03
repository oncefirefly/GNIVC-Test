import isRuConsonant from "./isRuConsonant";

export const firstDeclension = (word, lastLetter) => {
    return word[lastLetter] === 'а' || word[lastLetter] === 'я';
};

export const secondDeclension = (word, lastLetter) => {
    return isRuConsonant(word[lastLetter]) ||
        word[lastLetter] === 'о' ||
        word[lastLetter] === 'е';
};

export const thirdDeclension = (word, lastLetter) => {
    return word[lastLetter] === 'ь';
};
