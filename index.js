/* 
    for loop
        create 16x16 grid of divs    
    add class to divs
    
*/



const container = document.querySelector(".container");  // container div
// let gridItems;

for (let i = 0; i < 32; i++){
    let gridItems = document.createElement("div");
    
    container.appendChild(gridItems);

};

