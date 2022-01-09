console.log("++++ latest Web APIS ++++++ ")
const content = document.querySelector(".content")
const original = { name: "Web technology for developers Web APIs structuredClone()" };
original.itself = original;

const clone = structuredClone(original);
content.innerText = clone.name
content.style.color = "white"

console.log(clone)