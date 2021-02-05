
let header = document.querySelector('h1');
let article = document.querySelector('article');
let paragraphs = document.querySelectorAll('p');

// console.log(header.innerText);
// console.log(header.textContent);
// console.log(article.innerHTML);
// console.log(header.outerHTML);

// for (const paragraph of paragraphs) {
//     if (paragraph.className) {
//         console.log(paragraph.className);
//     }
//     if (paragraph.id) {
//         console.log(paragraph.id);
//     }
// }
let newParagraph = document.createElement('p');
newParagraph.innerText = "This is a brand new paragraph added by JavaScript";
article.append(newParagraph);
// article.prepend(newParagraph);
// article.after(newParagraph);
// article.before(newParagraph);
// article.replaceWith(newParagraph);
newParagraph.className = "example-paragraph";
newParagraph.id = "example-id";


let exampleList = ["Apple", "Bananas", "Grapes", "Lemon"];

let exampleList2 = [
    { name: "Apple", weight: 20 },
    { name: "Bananas", weight: 30 },
    { name: "Grapes", weight: 50 },
    { name: "Lemon", weight: 10 },
];

let exampleList3 = {
    "Apple": 10,
    "Bananas": 20,
    "Grapes": 30,
    "Lemon": 10,
};


let exampleHomeWork0 = [
    ["Apple", 10],
    ["Bananas", 20],
    ["Grapes", 30],
    ["Lemon", 10],
];
let exampleHomeWork1 = [
    ["Apple", "Bananas", "Grapes", "Lemon"],
    [10,  20, 30, 10],
];
let exampleHomeWork2 = [
    { type: "header", cells: ["Apple", "Bananas", "Grapes", "Lemon"] },
    { type: "row", cells: [10,  20, 30, 10] },
];
let newArticle = document.createElement('article');
newArticle.innerText = "table";
newArticle.append('table');