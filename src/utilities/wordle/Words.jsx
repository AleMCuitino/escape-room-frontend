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
    let todaysWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            // console.log(result)
            const wordArr = result.split(",");
            // console.log(wordArr)
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr); 
            // console.log(wordSet)
            
        });

        return { wordSet, todaysWord };
};