const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const mainDiv = document.querySelector("#main");

console.log(submit);
console.log(input);
console.log(mainDiv);

submit.addEventListener("click", function() {
    
    while (mainDiv.hasChildNodes()) {
        mainDiv.removeChild(mainDiv.firstChild);
    }

    console.log(input.value)
    let inputValue = input.value;
    if (inputValue > 100) {
        inputValue = 100;
    };
    console.log(inputValue);
    let randomColor = function() {
        return Math.random() * 255;
    };
    for (let i = 1; i <= inputValue; i++) {
        
        let row = document.createElement("div");
        console.log(row);
        row.className = "row";
        row.style.backgroundColor = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
        mainDiv.appendChild(row);
        for (let j = 1; j <= inputValue; j++) {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.style.backgroundColor = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
            let newestRow = mainDiv.lastElementChild;
            newestRow.appendChild(tile);
        };
        
    };
    const allTiles = document.querySelectorAll(".tile");
for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener("mouseover", function() {
        allTiles[i].style.backgroundColor = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
    });
};
});

