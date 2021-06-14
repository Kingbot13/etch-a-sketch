/* 
    for loop
        create 16x16 grid of divs    
    add class to divs
    
*/

const button = document.querySelector("button");

function createGrid (gridColumns){

    gridSize = gridColumns * gridColumns;

    const container = document.querySelector(".container");  // container div
    container.style.cssText += `grid-template-columns: repeat(${gridColumns}, 1fr); grid-template-rows: repeat(${gridColumns});`
    let gridItems;
    
    for (let i = 0; i < gridSize; i++){
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
}

button.addEventListener("click", () => {
    a = prompt("What size grid?");
    gridColumns = parseInt(a);

    gridColumns <= 100 ? createGrid(gridColumns) : alert("ERROR! Please enter number less than or equal to 100");
    
});

