let inp=document.querySelector(".inp");
let tasks=document.querySelector(".tasks");

let body=document.querySelector("body");
body.addEventListener("keydown",function(event){
    if(event.code=='Enter'){
        console.log("Pressed Enter");
        let div=document.createElement("div");
        div.classList.add("task");
        div.innerText=inp.value;
        inp.value="";
        tasks.appendChild(div);
    }
})
tasks.addEventListener("click",function(event){
    if(event.target.classList.contains("task")){
        event.preventDefault();
        let task=event.target;
        if(task.classList.contains("comp")){
            task.classList.remove("comp");
        }
        else{
            task.classList.add("comp");
        }
    }
})
tasks.addEventListener("contextmenu",function(event){
    if(event.target.classList.contains("task")){
        let task=event.target;
        task.remove();
    }
})