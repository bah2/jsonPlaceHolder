
"use strict";
const addTodoBtn = document.getElementById("addTodoBtn");
const outputOfInput = document.getElementById("outputOfInput");





window.onload = () => {


  addTodoBtn.onclick = () =>{
    let formData = {
      userId: document.getElementById("inputUserId").value,
     title: document.getElementById("inputUserTitle").value,
      Completed: document.getElementById("inputUserStatus").value
    }
    
  
    fetch('https://jsonplaceholder.typicode.com/todos', {

    method: 'post',
    body: formData

    }).then((res) => res.json())
    .then(ftchData =>{

      outputOfInput.innerHTML = `A new todo has be added: ${ftchData.id}`
      console.log(ftchData.id);
    })

  }
}