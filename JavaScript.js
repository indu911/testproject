var x = 0; 
var s = "";
console.log("hello word");
var theform = document.getElementById("theform");
theform.hidden = true;
var button = document.getElementById("buy");
button.addEventListener("click", function () {
    console.log("buing item");

});
var productinfo = document.getElementsByClassName("product-props");
var listitmes = productinfo.item[0].children;

