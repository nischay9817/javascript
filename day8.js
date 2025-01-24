// let btn=document.querySelector("#btn1");
// btn.onclick=()=>{
//     console.log("Button Clicked");
//     alert("Button Clicked");
// };
// btn.addEventListener("click",()=>{
//     console.log("Button Clicked");
//     alert("Button Clicked");
// })
// let currentMode="light";
// btn.addEventListener("click",()=>{
//     if(currentMode==="light"){
//         currentMode="dark";
//         document.body.style.backgroundColor="black";
//     }
//     else{
//         currentMode="light";
//         document.body.style.backgroundColor="white";
//     }
// })
let btn=document.querySelector("#btn1");
let body=document.querySelector("body");
let currentMode="light";
btn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
})