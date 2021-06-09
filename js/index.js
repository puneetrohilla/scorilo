bgr=document.querySelector(".bgr");
navlinks=document.querySelector(".navlinks");
nav=document.querySelector("nav");
// bgr=document.querySelector(".bgr");
bgr.addEventListener("click",()=>
{
    nav.classList.toggle("h-class-resp")
    navlinks.classList.toggle("o-class-resp");
})