import wordBank from '../wordle/wordle-bank.txt';

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    let wordSet;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            const wordArr = result.split(",");
            console.log(wordArr)
            wordSet = new Set(wordArr); //add wordArr later
            console.log(wordSet)
            
        });

        return { wordSet };
};