/* This assigns the element with id 'buttonId' to 'btn' */
var btn = document.getElementById('btn');

btn.innerHTML = 0;

btn.addEventListener("click",function() {btn.innerHTML++});