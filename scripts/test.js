
"use strict";

let userSearch = document.getElementById("jsonPlaceHolder");
let userSearchBtn = document.getElementById("userSearchBtn");
const outPuts = document.getElementById("outPuts");
document.getElementById("userSearchBtn").style.display = "none";

// userSearchBtn.onclick = () =>{

  // let userSearch = document.getElementById("jsonPlaceHolder");



  fetch("https://jsonplaceholder.typicode.com/users"
  )
  .then(response => response.json())
  .then(data => {

  
    for(let i = 0; i < data.length; i++){
      let newOpt = document.createElement("option");
      newOpt.textContent = data[i].name + " " + data[i].email;
      newOpt.value = data[i].name;
      userSearch.appendChild(newOpt);

      document.getElementById("userSearchBtn").style.display = "none";
    

    }
   
    
  });





    

 userSearch.onclick = () =>{

  
      outPuts.innerHTML = "Name: " + usersInfo.name + "<br>" + "UserName: " +  usersInfo.username + "<br>" + " Email: " + usersInfo.email ;

    }


   
    userSearch();

















