const addBtn = document.getElementById("addBtn")
const counter = document.getElementById("counter")
const minusBtn = document.getElementById("minusBtn")

// Buttons
let count = 0;

addBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
    counter.style.backgroundColor =  "rgba(127, 255, 212, 0.155)";   
})
minusBtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;
    counter.style.backgroundColor = "rgba(221, 160, 221, 0.155)";   
   
})
resetBtn.addEventListener('click', () => {
    count = 0;
    counter.innerText = count;
    counter.style.backgroundColor = "aliceblue";   
   
})
