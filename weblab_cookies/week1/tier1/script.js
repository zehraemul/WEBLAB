const btn_minus = document.querySelector("#btn_minus");
const btn_plus = document.querySelector("#btn_plus");
const text = document.querySelector(".text");

let num = 0;


btn_minus.addEventListener("click", (()=>{
    num-=1;
    text.innerHTML=num;
 

}));

btn_plus.addEventListener("click",(()=>{
    num+=1;
    text.innerHTML=num;
}));