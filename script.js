//Select element with class 'subcontainer'
const subcontainer = document.querySelector(".subcontainer");

//Append 256 divs into the parent node 'subcontainer'
for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    subcontainer.appendChild(div);
    div.classList.add("grid");
}

//Select all elements with class 'grid'
const grids = document.querySelectorAll(".grid");

let choice1 = false;
let choice2 = false;
const rando = document.querySelector(".rando");
const opac = document.querySelector(".opac");
rando.addEventListener("click", ()=>{
    if (choice1 === true){
        choice1 = false;
        rando.style.background = 'rgb(170, 170, 170)';
    }else{
        choice1 = true;
        rando.style.background = 'white';
    }});
opac.addEventListener("click", ()=>{
    if (choice2 === true){
        choice2 = false;
        opac.style.background = 'rgb(170, 170, 170)';
    }else{
        choice2 = true;
        opac.style.background = 'white';
    }});

//All elements with class 'grid' listen for mouseover event
grids.forEach((grid)=>{
    let opacity = 10;
    grid.addEventListener("mouseover", ()=>{
        if (choice1){
            let random1 = Math.floor(Math.random()*255);
            let random2 = Math.floor(Math.random()*255);
            let random3 = Math.floor(Math.random()*255);
            grid.style.background = `rgb(${random1}, ${random2}, ${random3})`;    
        }
        else if (choice2){
            grid.style.background = `rgb(255, 0, 0, ${opacity}%)`;
            if (opacity < 100){
                opacity += 10;
            }
        }
        

    })
})

function createGrid(gridNum){
    //Clear parent node 'subcontainer'
    while (subcontainer.firstChild) {
        subcontainer.removeChild(subcontainer.lastChild);
    }

    //Prompt user input
    gridNum = parseInt(prompt("Enter desired number of grids per side: "));

    //Alert and terminate if grid number is larger than or equal to 100
    if (gridNum >= 100){
        alert("Grid number too high! Enter a number below 100!");
        return;
    }

    let percent = 100/gridNum;

    //Append divs according to user input
    for (let i = 0; i < gridNum**2; i++){
        const div = document.createElement("div");
        subcontainer.appendChild(div);
        div.classList.add("grid");
    }

    const grids = document.querySelectorAll(".grid");

    grids.forEach((grid)=>{
        grid.style.flexBasis = `${percent}%`;
        grid.addEventListener("mouseover", ()=>{
            grid.style.background = 'red';
        })
    }) 
}

//Select element with button tag
const reset = document.querySelector(".reset");

//Button listen for click event
reset.addEventListener("click", createGrid);