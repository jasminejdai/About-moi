const change = document.getElementById("button")

const changez = document.getElementById("buttonz")

const pic = document.getElementById("image")

change.addEventListener("click", ()=>{
  pic.src = "images/ICECECEECE.jpg"
})

changez.addEventListener("click", ()=>{
  pic.src = "images/pineapple.jpg"
})