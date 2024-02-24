document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

let btn = document.getElementById("change-color-btn")
let box = document.getElementById("color-box")

let color =[ "green", "red", "black","yelow" , "orange", "purple","white"];
         i=0 ;
btn.addEventListener("click", function getRandomColor () {
    

          i=1 < color.length ? ++i : 0;
    
         box.style.background = color[i];
    

} )


