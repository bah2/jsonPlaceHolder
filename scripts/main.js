
"use strict";

let userSearch = document.getElementById("jsonPlaceHolder").value;
let userSearchBtn = document.getElementById("userSearchBtn");
const outPuts = document.getElementById("outPuts");

userSearchBtn.onclick = () =>{

  let userSearch = document.getElementById("jsonPlaceHolder").value;
  fetch("https://jsonplaceholder.typicode.com/todos/" + jsonPlaceHolder.value)
  .then(response => response.json())
  .then(data =>{
    
    outPuts.innerHTML = "The title of the page is: " + data.title + ",\n \t" + "The Id is : \t" +  data.id;

  })

}














