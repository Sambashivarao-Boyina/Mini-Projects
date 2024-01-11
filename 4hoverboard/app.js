let container=document.querySelector(".container");
let colors=['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
for(let i=0;i<500;i++){
    let box=document.createElement("div");
    box.classList.add("square");
    box.addEventListener("mouseover",()=>{addColor(box)});
    box.addEventListener("mouseout",()=>{removeColor(box)});
    container.appendChild(box);
}

function getRandomIdx(){
    return Math.floor(Math.random()*colors.length);
}
function addColor(box){
    let idx=getRandomIdx();
    console.log("you on box");
    box.style.backgroundColor=colors[idx];
    box.style.boxShadow=`0px 0px 20px ${colors[idx]}`;
}

function removeColor(box){
    box.style.backgroundColor= "#322e2b";
    box.style.boxShadow="0px 0px 2px #322e2b";
}

