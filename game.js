

const colr = ["blue", "orange", "green", "yellow", "black", "pink", "gray", "Aqua", "purple", "gold"];
let size;
const btn = document.getElementById("pop");
btn.addEventListener("click", () => {
    size = prompt("Choose your size grid: ");
    if (size != undefined && size != NaN) {
        container.replaceChildren();
    }
CreateColoredCubes(size);

});


const container = document.querySelector(".container");
CreateColoredCubes(16);

function CreateColoredCubes(size){

    let carr = [];
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        for (let j = 0; j < size; j++) {
            const divv = document.createElement("div");
            div.appendChild(divv);
            carr.push(divv);
        }
    }
    carr.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            let n = Math.floor(Math.random() * colr.length);
            div.style.backgroundColor = colr[n];

        });
    });
}

