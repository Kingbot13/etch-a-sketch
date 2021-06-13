/* 
    for loop
        create 16x16 grid of divs    
    add class to divs
    
*/



const container = document.querySelector(".container");  // container div
let gridItems;

for (let i = 0; i < 32; i++){
    gridItems = document.createElement("div");
    gridItems.classList.add("grid-item");
    container.appendChild(gridItems);

};

const gridList = document.querySelectorAll(".grid-item");

gridList.forEach(gridItems => {
    gridItems.addEventListener("mouseenter", () => {
        gridItems.classList.add("active");
    });
});