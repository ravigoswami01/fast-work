let icon =document.querySelector(".icon");
let ul =document.querySelector("ul");

icon.addEventListener("click",()=>{
    ul.classList.toggle("showData");
    console.log(ul)
    if(ul.classList == "showDate"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
}
)
//navbar

let Shop =getElementById("Shop");
let review =getElementById("review");
let blogs =getElementById("blog");
let contacts =getElementById("connect");

shops.addEventListener("click", ()=>{
   shop.style.color="rgb(3, 212, 212)";
   review.style.color="white";
   blogs.style.color="white";
   contacts.style.color="white";
})