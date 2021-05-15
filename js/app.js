var burger = document.querySelector(".menu");
var burger_dash = document.querySelector(".hamburger");
var menu = document.querySelector(".Media-Icon");
var lists = document.querySelector(".Icon-Container");

var Nav_list = document.querySelector(".Nav-List");

var ul = document.querySelector("#Icon-Container");
var li = document.querySelectorAll(".Icon-Items")

burger.addEventListener("click", function(){
    burger_dash.classList.toggle("open");
    menu.style.transform = "scale(1.1,1.1) rotate(20deg, 30deg)";
    // menu.style.backgroundColor = "gold";
    // menu.style.borderRadius = "50% 50% 50% 50%";

});

menu.addEventListener("click",function (){
  for(let i = 0; i <= li.length - 1;  i++) {
    li[i].classList.toggle("Shown");
  }
});

let ball1 = document.querySelector(".ball1");

ball1.addEventListener("mouseover", function() {
  ball1.style.animationPlayState = "paused";
  ball1.style.cursor ="pointer";
})

ball1.addEventListener("mouseout", function() {
  ball1.style.animationPlayState = "running";
})
