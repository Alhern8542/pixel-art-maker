// Select color input
const color = document.querySelector("#colorPicker");

// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector("#inputSub");
const canvas = document.querySelector("#pixelCanvas");

function makeGrid(e) {
    e.preventDefault();
    for(let x = 0; x < height.value; x++){
        let row = document.createElement("tr");
        canvas.appendChild(row);
        for(let y = 0; y < width.value; y++){
            let pixel = document.createElement("td");
            pixel.addEventListener("click", function(){
                pixel.style.backgroundColor = color.value;
            })
            row.appendChild(pixel);
        }
    }
    submit.removeEventListener("click", makeGrid);
}

submit.addEventListener("click", makeGrid);
