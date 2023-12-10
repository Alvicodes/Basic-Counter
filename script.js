const addBtn = document.getElementById("addBtn")
const counter = document.getElementById("counter")
const minusBtn = document.getElementById("minusBtn")

// Buttons
let count = 0;

addBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;   
})
minusBtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;   
})
