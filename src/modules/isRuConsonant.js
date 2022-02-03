const isRuConsonant = (letter) => {
    const ruConsonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к',
        'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф',
        'х', 'ц', 'ч', 'ш', 'щ'];

    return ruConsonants.includes(letter.toLocaleLowerCase());
};

export default isRuConsonant;