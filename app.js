const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];


const form = document.querySelector(".quiz-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
}

const inputs = document.querySelectorAll("input");
console.log(inputs);
const inputsTab = Array.from(inputs);

for (let input of inputsTab){
    console.log(inputsTab)
}