const card1 = document.querySelector("#card1")
const card2 = document.querySelector("#card2")
const card3 = document.querySelector("#card3")
const card4 = document.querySelector("#card4")
const card5 = document.querySelector("#card5")
const card6 = document.querySelector("#card6")

setTimeout(function(){ 
  const btn_array = document.querySelectorAll(".option")

  btn_array[1].addEventListener("click",sortMinMax)
  btn_array[2].addEventListener("click",sortMaxMin)
 }, 1500);

function sortMaxMin() {
   card1.classList.remove("order1")
   card1.classList.add("order6")
   card2.classList.remove("order4")
   card2.classList.add("order3")
   card3.classList.remove("order3")
   card3.classList.add("order4")
   card4.classList.remove("order2")
   card4.classList.add("order5")
   card5.classList.remove("order5")
   card5.classList.add("order2")
   card6.classList.remove("order6")
   card6.classList.add("order1")
}

function sortMinMax() {
   card1.classList.add("order1")
   card1.classList.remove("order6")
   card2.classList.add("order4")
   card2.classList.remove("order3")
   card3.classList.add("order3")
   card3.classList.remove("order4")
   card4.classList.add("order2")
   card4.classList.remove("order5")
   card5.classList.add("order5")
   card5.classList.remove("order2")
   card6.classList.add("order6")
   card6.classList.remove("order1")
}