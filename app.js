const colors = ["green","red","black","silver","gray","white",
"maroon","purple","fuchsia","green","lime","olive","blue","aqua",
"navy","blueviolet"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// console.log(btn)

var prev = 0;
btn.addEventListener("click",function(){
    // console.log(document.body)
    var randomNumber = Math.floor(getrandom());
    // console.log(randomNumber)
    while(randomNumber === prev){
        randomNumber = Math.floor(getrandom())
    } 
    prev = randomNumber;
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getrandom(){
  return Math.random() * colors.length;  
}