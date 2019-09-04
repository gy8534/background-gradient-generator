var input1 = document.querySelectorAll("input")[0];
var input2 = document.querySelectorAll("input")[1];
var h3 = document.querySelector("h3");
var body =document.getElementsByTagName("body")[0];

function changeGradient(){
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
    h3.innerHTML = "background: linear-gradient(to right, " + input1.value + ", " + input2.value + ")";

}

input1.addEventListener("input", function(){
    changeGradient();
})

input2.addEventListener("input", function(){
    changeGradient();
})