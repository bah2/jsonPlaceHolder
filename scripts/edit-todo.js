

"use strict";
// const getInputUserId = document.getElementById("getInputUserId");
const outputOfInput = document.getElementById("outputOfInput");
const getTodoBtn = document.getElementById("getTodoBtn");
const editTodoBtn = document.getElementById("editTodoBtn");
const cancelTodoBtn = document.getElementById("cancelTodoBtn");

window.onload = () => {


  getTodoBtn.onclick = () =>{
    let getInputUserId = document.getElementById("getInputUserId");

    fetch(`https://jsonplaceholder.typicode.com/todos/${getInputUserId.value}`)
    .then((res) => res.json())
    .then(ftchData =>{

      let inputUserId = document.getElementById("inputUserId");
      inputUserId.value = ftchData.inputUserId;
      let inputUserTitle = document.getElementById("inputUserTitle");
      inputUserTitle.value = ftchData.inputUserTitle;
      let inputUserStatus= document.getElementById("inputUserStatus");
      inputUserStatus.value = ftchData.inputUserStatus;
     if(getInputUserId == true){
      getInputUserId.disabled
      console.log(ftchData);
     }
     
    })

  }

  editTodoBtn.onclick = () =>{
    const outputOfInput = document.getElementById("inputUserStatus");
    let getInputUserId = document.getElementById("getInputUserId").value
    let formData = {
      userId: document.getElementById("inputUserId").value,
      title: document.getElementById("inputUserTitle").value,
       Completed: document.getElementById("inputUserStatus").value
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${getInputUserId}`, {
  method: post,
  body: formData

    })
    .then(res => res.json())
    .then(json =>{

      outputOfInput.innerHTML =  `Todo task has been updated`


    });
    
  }

  cancelTodoBtn.onclick = () =>{
    window.location.replace(`index.html`)
  }
}