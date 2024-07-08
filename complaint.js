
const btn=document.querySelector("#submit1");
let name1 = document.getElementById("name1");
let email1 = document.getElementById("email1");
let complaint1 = document.getElementById("complaint1");

btn.addEventListener("click" , ()=> {
    alert("This form has been successfully submitted!");
    console.log(`This form has a name of ${name1.value} and email of ${email1.value} with complaint of $(complaint1.value)` );

})