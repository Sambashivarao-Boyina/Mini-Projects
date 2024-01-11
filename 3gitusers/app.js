let url = "https://api.github.com/users/";

let inp=document.querySelector(".inp");
let card_container=document.querySelector(".card-contaier");
let form=document.querySelector("form");

async function getData(userurl){
    try{
        let {data}=await axios.get(userurl);
        return data;
    }
    catch(err){
        console.log("user not found");
    }
}


function createRepos(repos){
    let container="";
    for(let i=0;i<repos.length;i++){
        let repo=`
        <a href="${repos[i].html_url}">
            <div class="repo">${repos[i].name}</div>
        </a>
        `
        container+=repo;
    }
    return container;
}
  
async function createCard(username){
    let user= await getData(url+username); 
    let repos=await getData(user.repos_url);
   

    let card_repos=createRepos(repos);

    let card=`
    <div class="card">
        <div class="card-img">
            <img src= "${user.avatar_url}" class="img">
        </div>
        <div class="card-details">
            <div class="card-owner">
                <a href="${user.html_url}">${user.name}</a>
            </div>
            <div class="card-bio">
                ${user.bio}
            </div>
            <div class="card-com">
                <div class="card-followers"> ${user.followers}:Followes &nbsp</div>
                <div class="card-following">${user.following }:Following &nbsp</div>
                <div class="card-norepos">${repos.length}:repos</div>
            </div>
            <div class="card-repos">
               ${card_repos}
            </div>
        </div>
    </div>
    `;
    card_container.innerHTML=card;
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    let username=inp.value;
    if(username){
        createCard(username);
    }
    inp.value="";
});



