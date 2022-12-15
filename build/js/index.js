const book = {
    title: "The dark night",
    author: "Hary Maguaier",
    numPages: 450
};
const books = [
    {
        title: "The dark night",
        author: "Hary Maguaier",
        numPages: 450
    },
    {
        title: "The white night",
        author: "Mori Mori",
        numPages: 325
    },
    {
        title: "The green night",
        author: "Lesi Lesi",
        numPages: 256
    },
    {
        title: "The lazy night",
        author: "Mosi Mosi",
        numPages: 1250
    }
];
function findBook(books, title) {
    let answer = [];
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book.title == title) {
            answer.push(books[i]);
        }
    }
    return answer;
}
const bookFound = findBook(books, "The lazy night");
console.log(bookFound);
function calculateWord(word) {
    let result = {};
    for (let letters of word) {
        if (result[letters] == undefined) {
            result[letters] = 1;
        }
        else {
            result[letters] = result[letters] + 1;
        }
    }
    return result;
}
const result = calculateWord("kalle");
console.log(result);
import { users } from "./users.js";
function filterByCountry(arr, country) {
    let searchResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nat === country) {
            searchResult.push(arr[i]);
        }
    }
    return searchResult;
}
const searchResult = filterByCountry(users, "FR");
console.log(searchResult);
function filterByGender(arr, genderSex) {
    let searchResult = [];
    let males = ["Mr", "Monsieur"];
    let females = ["Ms", "Mrs", "Miss", "Madame", "Mademoiselle"];
    for (let i = 0; i < arr.length; i++) {
        if (genderSex === "Male") {
            if (males.includes(arr[i].name.title)) {
                searchResult.push(arr[i]);
            }
        }
        if (genderSex === "Female") {
            if (females.includes(arr[i].name.title)) {
                searchResult.push(arr[i]);
            }
        }
    }
    return searchResult;
}
console.log(filterByGender(users, "Female"));
function listEmails(arr) {
    let searchResult = [];
    for (let i = 0; i < arr.length; i++) {
        searchResult.push(arr[i].email);
    }
    return searchResult;
}
console.log(listEmails(users));
function newListEmails(arr) {
    return arr.map(item => `${item.name.last}.${item.name.first}@evilcorp.${item.nat.toLowerCase()}`);
}
console.log(newListEmails(users));
