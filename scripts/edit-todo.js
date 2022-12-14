

"use strict";
const outputOfInput = document.getElementById("outputOfInput");
const getTodoBtn = document.getElementById("getTodoBtn");
const editTodoBtn = document.getElementById("editTodoBtn");
const cancelTodoBtn = document.getElementById("cancelTodoBtn");

window.onload = () => {


  getTodoBtn.onclick = () =>{
    let getInputUserId = document.getElementById("getInputUserId");

    fetch(`https://jsonplaceholder.typicode.com/todos/${getInputUserId.value}`)
    .then((res) => res.json())
    .then(data =>{

      let inputUserId = document.getElementById("inputUserId");
      inputUserId.value = data.id;
      let inputUserTitle = document.getElementById("inputUserTitle");
      inputUserTitle.value = data.title;
      let inputUserStatus= document.getElementById("inputUserStatus");
      inputUserStatus.value = data.completed;

     if(getInputUserId == true){
      getInputUserId.disabled
      
     }
     console.log(data);
    })

    

  }

  editTodoBtn.onclick = () =>{
    const outputOfInput = document.getElementById("outputOfInput");
    let getInputUserId = document.getElementById("getInputUserId").value
    let formData = {
      userId: document.getElementById("inputUserId").value,
      title: document.getElementById("inputUserTitle").value,
       Completed: document.getElementById("inputUserStatus").value
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${getInputUserId}`, {
  method: 'PUT',
  body: formData

    })
    .then(res => res.json())
    .then(json =>{

      outputOfInput.innerHTML =  `Todo task has been updated`

    });
    
  }
// Redirecting users to the homepage
  cancelTodoBtn.onclick = () =>{
    window.location.replace(`index.html`)
  }
}