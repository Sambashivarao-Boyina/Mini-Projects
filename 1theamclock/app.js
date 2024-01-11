let min=document.querySelector(".min");
let hour=document.querySelector(".hour");
let sec=document.querySelector(".second");

let time=document.querySelector(".time");
let calender=document.querySelector(".calender");

let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
function updateTime(){
    let date=new Date();
    let h=date.getHours();
    h=(h>12)?h-12:h;
    
    min.style.transform=`translate(-50%, -100%) rotate(${scale(date.getMinutes(),60,360)}deg)`;
    hour.style.transform=`translate(-50%, -100%) rotate(${scale(h,12,360)}deg)`;
    sec.style.transform=`translate(-50%, -100%) rotate(${scale(date.getSeconds(),60,360)}deg)`;

    let med=(date.getHours()>12)?"PM":"AM";
    time.innerText=`${h}:${date.getMinutes()} ${med}`;
    calender.innerHTML=`${days[date.getDay()]} ,${months[date.getMonth()]}  <div class="date">${date.getDate()}</div>`;
}

function scale(val,old_max,new_max){
    return val*new_max/old_max;
}

setInterval(updateTime,1000);

let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
     let html=document.querySelector("html");
     if(html.classList.contains("dark")){
        html.classList.remove("dark");
        btn.innerHTML="Dark Mode";
     }
     else{
        html.classList.add("dark");
        btn.innerHTML="Light Mode";
     }
})