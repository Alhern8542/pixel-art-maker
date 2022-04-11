// Select color input
const color = document.querySelector("#colorPicker");

// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
const form = document.querySelector("#sizePicker");
const submit = document.querySelector("#inputSub");
const canvas = document.querySelector("#pixelCanvas");

function makeGrid(e) {
    e.preventDefault();

    for(let x = 0; x < height.value; x++){
        let row = document.createElement("tr");
        row.id = `row${x}`;
        canvas.appendChild(row);
        for(let y = 0; y < width.value; y++){
            let column = document.createElement("td");
            row.appendChild(column);
        }
    }

    console.log(height.value);
    console.log(width.value);
    console.log("Is this working?");
}

submit.addEventListener("click", makeGrid);

